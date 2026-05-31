import { Injectable } from '@nestjs/common';
import { PoiType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParkDto, CreatePoiDto } from './dto/parks.dto';

@Injectable()
export class ParksService {
  constructor(private readonly prisma: PrismaService) {}

  listParks() {
    return this.prisma.park.findMany({ orderBy: { createdAt: 'asc' } });
  }

  createPark(dto: CreateParkDto) {
    return this.prisma.park.create({ data: { name: dto.name } });
  }

  listPois(parkId: string) {
    return this.prisma.poi.findMany({
      where: { parkId },
      orderBy: [{ type: 'asc' }, { name: 'asc' }],
    });
  }

  createPoi(parkId: string, dto: CreatePoiDto) {
    return this.prisma.poi.create({
      data: {
        parkId,
        type: dto.type,
        name: dto.name,
        zone: dto.zone,
        lat: dto.lat,
        lng: dto.lng,
      },
    });
  }

  async seedSamplePark(name = 'Sample Park') {
    const park = await this.prisma.park.create({ data: { name } });
    const pois: Array<Omit<CreatePoiDto, 'type'> & { type: PoiType }> = [
      { type: PoiType.ATTRACTION, name: 'Attraction A', zone: 'Zone 1', lat: 39.849, lng: 116.565 },
      { type: PoiType.ATTRACTION, name: 'Attraction B', zone: 'Zone 1', lat: 39.8502, lng: 116.5662 },
      { type: PoiType.SHOW, name: 'Show A', zone: 'Zone 2', lat: 39.8488, lng: 116.5671 },
      { type: PoiType.RESTAURANT, name: 'Restaurant A', zone: 'Zone 2', lat: 39.8482, lng: 116.5658 },
    ];

    await this.prisma.poi.createMany({
      data: pois.map((p) => ({ ...p, parkId: park.id })),
    });

    return park;
  }
}
