import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GuideMode, PoiStatus, PoiType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CandidatePoi, scoreCandidates, walkEtaMinutes } from './plan.scoring';
import { GeneratePlanDto, ReplanDto } from './dto/plans.dto';

function mapMode(mode?: GuideMode) {
  return (mode ?? 'COPILOT') as 'MISSION' | 'COPILOT';
}

@Injectable()
export class PlansService {
  constructor(private readonly prisma: PrismaService) {}

  private async loadCandidates(parkId: string): Promise<CandidatePoi[]> {
    const pois = await this.prisma.poi.findMany({
      where: { parkId },
      select: { id: true, type: true, name: true, zone: true, lat: true, lng: true },
    });

    const latest = await this.prisma.poiLive.findMany({
      where: { poiId: { in: pois.map((p) => p.id) } },
      orderBy: { capturedAt: 'desc' },
    });

    const liveByPoi = new Map<string, { status: PoiStatus; waitMin: number | null }>();
    for (const l of latest) {
      if (!liveByPoi.has(l.poiId)) {
        liveByPoi.set(l.poiId, { status: l.status, waitMin: l.waitMin ?? null });
      }
    }

    return pois.map((p) => {
      const live = liveByPoi.get(p.id);
      return {
        ...p,
        status: live?.status ?? 'UNKNOWN',
        waitMin: live?.waitMin ?? null,
      };
    });
  }

  async generate(userId: string, dto: GeneratePlanDto) {
    const candidates = await this.loadCandidates(dto.parkId);
    const attractions = candidates.filter((c) => c.type === 'ATTRACTION' && c.status !== 'DOWN');
    const ranked = scoreCandidates({
      from: dto.location,
      keepTotalMin: 9999,
      candidates: attractions,
      mode: mapMode(dto.mode),
    });

    const selected = ranked.slice(0, 5).map((x) => x.poi.id);
    if (!selected.length) {
      throw new BadRequestException('no_candidates');
    }

    const planData = {
      steps: selected.map((id) => ({ poiId: id })),
      createdAt: new Date().toISOString(),
    };

    const plan = await this.prisma.plan.create({
      data: {
        userId,
        parkId: dto.parkId,
        mode: dto.mode ?? 'COPILOT',
        template: dto.template,
        data: planData,
      },
    });

    const first = ranked[0];
    return {
      plan,
      next_action: {
        poi_id: first.poi.id,
        poi_type: first.poi.type,
        title: first.poi.name,
        why: ['预计总耗时较低'],
        walk_eta_min: first.walk_eta_min,
        wait_min: first.expected_wait_min,
      },
    };
  }

  async replan(userId: string, dto: ReplanDto) {
    const plan = await this.prisma.plan.findFirst({ where: { id: dto.planId, userId } });
    if (!plan) throw new NotFoundException('plan_not_found');

    const candidates = await this.loadCandidates(plan.parkId);
    const currentPoiId =
      dto.currentPoiId ??
      ((plan.data as any)?.steps?.[0]?.poiId as string | undefined) ??
      undefined;

    const keepPoi = currentPoiId ? candidates.find((c) => c.id === currentPoiId) : undefined;
    if (!keepPoi) throw new BadRequestException('current_poi_required');

    const keepWalk = walkEtaMinutes(dto.location, { lat: keepPoi.lat, lng: keepPoi.lng });
    const keepWait = dto.currentWaitMin ?? keepPoi.waitMin ?? 20;
    const keepTotal = keepWalk + keepWait + 10;

    const pool = candidates.filter(
      (c) =>
        c.id !== keepPoi.id &&
        c.status !== 'DOWN' &&
        (c.type === keepPoi.type || keepPoi.type === 'ATTRACTION'),
    );

    const ranked = scoreCandidates({
      from: dto.location,
      keepTotalMin: keepTotal,
      candidates: pool,
      mode: mapMode(plan.mode),
      sameZone: keepPoi.zone,
    });

    const top = ranked.slice(0, plan.mode === 'MISSION' ? 1 : 4);
    const presentation =
      plan.mode === 'MISSION' && dto.eventType !== 'NEW_IMPORT' ? 'modal' : 'banner';

    const alternatives = top.map((x) => ({
      poi_id: x.poi.id,
      poi_type: x.poi.type,
      title: x.poi.name,
      walk_eta_min: x.walk_eta_min,
      expected_wait_min: x.expected_wait_min,
      expected_total_min: x.expected_total_min,
      save_total_min: x.save_total_min,
      swap_reason: dto.eventType,
      risk_flags: [],
      explain: [
        `步行约${x.walk_eta_min}分钟`,
        x.expected_wait_min != null ? `等待${x.expected_wait_min}分钟` : '等待未知',
        x.save_total_min > 0 ? `预计省${x.save_total_min}分钟` : '时间差不明显',
      ],
    }));

    return {
      plan_id: plan.id,
      event_type: dto.eventType,
      ui_directive: { presentation, default_selected: 'switch' },
      keep_option: {
        poi_id: keepPoi.id,
        poi_type: keepPoi.type,
        title: keepPoi.name,
        walk_eta_min: keepWalk,
        wait_min: keepWait,
        expected_total_min: keepTotal,
      },
      alternatives,
      alerts: [
        {
          type: dto.eventType,
          severity: presentation === 'modal' ? 'critical' : 'warn',
          message: '发现更优方案',
        },
      ],
    };
  }

  async getPlan(userId: string, planId: string) {
    const plan = await this.prisma.plan.findFirst({ where: { id: planId, userId } });
    if (!plan) throw new NotFoundException('plan_not_found');
    return plan;
  }
}
