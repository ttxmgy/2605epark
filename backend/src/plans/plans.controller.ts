import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CurrentUserId } from '../auth/current-user.decorator';
import { GeneratePlanDto, ReplanDto } from './dto/plans.dto';
import { PlansService } from './plans.service';

@UseGuards(JwtAuthGuard)
@Controller()
export class PlansController {
  constructor(private readonly plans: PlansService) {}

  @Post('plan/generate')
  generate(@CurrentUserId() userId: string, @Body() dto: GeneratePlanDto) {
    return this.plans.generate(userId, dto);
  }

  @Post('plan/replan')
  replan(@CurrentUserId() userId: string, @Body() dto: ReplanDto) {
    return this.plans.replan(userId, dto);
  }

  @Get('plan/:planId')
  get(@CurrentUserId() userId: string, @Param('planId') planId: string) {
    return this.plans.getPlan(userId, planId);
  }
}

