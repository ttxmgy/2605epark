import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IngestLiveDto } from './dto/live.dto';

@Injectable()
export class LiveService {
  constructor(private readonly prisma: PrismaService) {}

  async getParkLive(parkId: string, date: string) {
    const pois = await this.prisma.poi.findMany({
      where: { parkId },
      select: { id: true, type: true, name: true, zone: true, lat: true, lng: true },
      orderBy: [{ type: 'asc' }, { name: 'asc' }],
    });

    const live = await Promise.all(
      pois.map(async (p) => {
        const latest = await this.prisma.poiLive.findFirst({
          where: { poiId: p.id },
          orderBy: { capturedAt: 'desc' },
          select: { capturedAt: true, status: true, waitMin: true },
        });
        return { ...p, live: latest ?? null };
      }),
    );

    const shows = await this.prisma.showSession.findMany({
      where: {
        poi: { parkId },
        startAt: { gte: new Date(`${date}T00:00:00.000Z`) },
      },
      orderBy: [{ poiId: 'asc' }, { startAt: 'asc' }],
      select: { poiId: true, startAt: true, endAt: true, status: true },
    });

    const hours = await this.prisma.parkHours.findMany({
      where: { parkId, date },
      orderBy: { venueName: 'asc' },
    });

    return { date, poi: live, shows, hours };
  }

  async ingest(parkId: string, dto: IngestLiveDto) {
    const capturedAt = new Date();

    if (dto.poi?.length) {
      await this.prisma.poiLive.createMany({
        data: dto.poi.map((p) => ({
          poiId: p.poiId,
          capturedAt,
          status: p.status ?? 'UNKNOWN',
          waitMin: p.waitMin ?? null,
        })),
      });
    }

    if (dto.shows?.length) {
      await Promise.all(
        dto.shows.map((s) =>
          this.prisma.showSession.create({
            data: {
              poiId: s.poiId,
              startAt: new Date(s.startAt),
              endAt: s.endAt ? new Date(s.endAt) : null,
              status: s.status,
            },
          }),
        ),
      );
    }

    if (dto.hours?.length) {
      await Promise.all(
        dto.hours.map((h) =>
          this.prisma.parkHours.upsert({
            where: { id: `${parkId}:${h.date}:${h.venueName}` },
            create: {
              id: `${parkId}:${h.date}:${h.venueName}`,
              parkId,
              date: h.date,
              venueName: h.venueName,
              openTime: h.openTime,
              closeTime: h.closeTime,
            },
            update: { openTime: h.openTime, closeTime: h.closeTime },
          }),
        ),
      );
    }

    return { ok: true, capturedAt };
  }
}

