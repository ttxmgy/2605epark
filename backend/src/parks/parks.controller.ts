import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CreateParkDto, CreatePoiDto } from './dto/parks.dto';
import { ParksService } from './parks.service';

@Controller('parks')
export class ParksController {
  constructor(private readonly parks: ParksService) {}

  @Get()
  listParks() {
    return this.parks.listParks();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createPark(@Body() dto: CreateParkDto) {
    return this.parks.createPark(dto);
  }

  @Get(':parkId/pois')
  listPois(@Param('parkId') parkId: string) {
    return this.parks.listPois(parkId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':parkId/pois')
  createPoi(@Param('parkId') parkId: string, @Body() dto: CreatePoiDto) {
    return this.parks.createPoi(parkId, dto);
  }

  @Post('dev/seed')
  seed(@Query('name') name?: string, @Body() body?: any) {
    return this.parks.seedSamplePark(name ?? body?.name);
  }
}
