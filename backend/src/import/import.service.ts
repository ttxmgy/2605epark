import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { parseScreenshotText } from './parser';

@Injectable()
export class ImportService {
  constructor(private readonly prisma: PrismaService) {}

  private hashValue(v: string) {
    return createHash('sha256').update(v).digest('hex');
  }

  async saveParsed(params: {
    userId: string;
    type: string;
    captureTime?: string;
    rawPath?: string;
    parsed: any;
  }) {
    const artifact = await this.prisma.importedArtifact.create({
      data: {
        userId: params.userId,
        type: params.type,
        captureTime: params.captureTime,
        rawPath: params.rawPath,
        parsed: params.parsed,
      },
    });

    if (params.parsed?.page_type === 'RESERVATION_LIST' && Array.isArray(params.parsed.items)) {
      for (const it of params.parsed.items) {
        await this.prisma.userReservation.create({
          data: {
            userId: params.userId,
            category: it.category ?? null,
            visitDate: it.visit_date,
            timeWindow: it.time_window ?? null,
            status: it.status ?? 'UNKNOWN',
            guestName: it.guest_name ?? null,
            guestCount: it.guest_count ?? null,
            sourceImportId: artifact.id,
          },
        });
      }
    }

    if (params.parsed?.page_type === 'RESERVATION_VOUCHER_QR') {
      const code = params.parsed.voucher_code_text as string | null;
      const visitDate = params.parsed.visit_date as string | null;
      if (code && visitDate) {
        const voucherHash = this.hashValue(code);
        const voucherLast4 = code.slice(-4);
        await this.prisma.userReservation.upsert({
          where: { voucherHash },
          create: {
            userId: params.userId,
            visitDate,
            timeWindow: params.parsed.entry_time_window ?? null,
            status: 'VALID',
            guestName: params.parsed.guest_name ?? null,
            voucherHash,
            voucherLast4,
            sourceImportId: artifact.id,
          },
          update: {
            timeWindow: params.parsed.entry_time_window ?? null,
            guestName: params.parsed.guest_name ?? null,
            voucherLast4,
            sourceImportId: artifact.id,
          },
        });
      }
    }

    return artifact;
  }

  parseText(text: string) {
    return parseScreenshotText(text);
  }
}

