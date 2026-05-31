"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const plan_scoring_1 = require("./plan.scoring");
function mapMode(mode) {
    return (mode ?? 'COPILOT');
}
let PlansService = class PlansService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async loadCandidates(parkId) {
        const pois = await this.prisma.poi.findMany({
            where: { parkId },
            select: { id: true, type: true, name: true, zone: true, lat: true, lng: true },
        });
        const latest = await this.prisma.poiLive.findMany({
            where: { poiId: { in: pois.map((p) => p.id) } },
            orderBy: { capturedAt: 'desc' },
        });
        const liveByPoi = new Map();
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
    async generate(userId, dto) {
        const candidates = await this.loadCandidates(dto.parkId);
        const attractions = candidates.filter((c) => c.type === 'ATTRACTION' && c.status !== 'DOWN');
        const ranked = (0, plan_scoring_1.scoreCandidates)({
            from: dto.location,
            keepTotalMin: 9999,
            candidates: attractions,
            mode: mapMode(dto.mode),
        });
        const selected = ranked.slice(0, 5).map((x) => x.poi.id);
        if (!selected.length) {
            throw new common_1.BadRequestException('no_candidates');
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
    async replan(userId, dto) {
        const plan = await this.prisma.plan.findFirst({ where: { id: dto.planId, userId } });
        if (!plan)
            throw new common_1.NotFoundException('plan_not_found');
        const candidates = await this.loadCandidates(plan.parkId);
        const currentPoiId = dto.currentPoiId ??
            plan.data?.steps?.[0]?.poiId ??
            undefined;
        const keepPoi = currentPoiId ? candidates.find((c) => c.id === currentPoiId) : undefined;
        if (!keepPoi)
            throw new common_1.BadRequestException('current_poi_required');
        const keepWalk = (0, plan_scoring_1.walkEtaMinutes)(dto.location, { lat: keepPoi.lat, lng: keepPoi.lng });
        const keepWait = dto.currentWaitMin ?? keepPoi.waitMin ?? 20;
        const keepTotal = keepWalk + keepWait + 10;
        const pool = candidates.filter((c) => c.id !== keepPoi.id &&
            c.status !== 'DOWN' &&
            (c.type === keepPoi.type || keepPoi.type === 'ATTRACTION'));
        const ranked = (0, plan_scoring_1.scoreCandidates)({
            from: dto.location,
            keepTotalMin: keepTotal,
            candidates: pool,
            mode: mapMode(plan.mode),
            sameZone: keepPoi.zone,
        });
        const top = ranked.slice(0, plan.mode === 'MISSION' ? 1 : 4);
        const presentation = plan.mode === 'MISSION' && dto.eventType !== 'NEW_IMPORT' ? 'modal' : 'banner';
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
    async getPlan(userId, planId) {
        const plan = await this.prisma.plan.findFirst({ where: { id: planId, userId } });
        if (!plan)
            throw new common_1.NotFoundException('plan_not_found');
        return plan;
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlansService);
//# sourceMappingURL=plans.service.js.map