import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CurrentUserId } from '../auth/current-user.decorator';
import { ProgressEventDto } from './dto/progress.dto';
import { ProgressService } from './progress.service';

@UseGuards(JwtAuthGuard)
@Controller('progress')
export class ProgressController {
  constructor(private readonly progress: ProgressService) {}

  @Post('event')
  create(@CurrentUserId() userId: string, @Body() dto: ProgressEventDto) {
    return this.progress.createEvent(userId, dto);
  }
}

