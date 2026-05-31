import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { IngestLiveDto } from './dto/live.dto';
import { LiveService } from './live.service';

@Controller('parks/:parkId/live')
export class LiveController {
  constructor(private readonly live: LiveService) {}

  @Get()
  getLive(@Param('parkId') parkId: string, @Query('date') date?: string) {
    const d = date ?? new Date().toISOString().slice(0, 10);
    return this.live.getParkLive(parkId, d);
  }

  @UseGuards(JwtAuthGuard)
  @Post('ingest')
  ingest(@Param('parkId') parkId: string, @Body() dto: IngestLiveDto) {
    return this.live.ingest(parkId, dto);
  }
}

