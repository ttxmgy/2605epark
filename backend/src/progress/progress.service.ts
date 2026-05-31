import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProgressEventDto } from './dto/progress.dto';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  createEvent(userId: string, dto: ProgressEventDto) {
    return this.prisma.progressEvent.create({
      data: {
        userId,
        planId: dto.planId,
        poiId: dto.poiId,
        type: dto.type,
        payload: dto.payload ?? undefined,
      },
    });
  }
}
