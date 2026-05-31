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
exports.LiveService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LiveService = class LiveService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getParkLive(parkId, date) {
        const pois = await this.prisma.poi.findMany({
            where: { parkId },
            select: { id: true, type: true, name: true, zone: true, lat: true, lng: true },
            orderBy: [{ type: 'asc' }, { name: 'asc' }],
        });
        const live = await Promise.all(pois.map(async (p) => {
            const latest = await this.prisma.poiLive.findFirst({
                where: { poiId: p.id },
                orderBy: { capturedAt: 'desc' },
                select: { capturedAt: true, status: true, waitMin: true },
            });
            return { ...p, live: latest ?? null };
        }));
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
    async ingest(parkId, dto) {
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
            await Promise.all(dto.shows.map((s) => this.prisma.showSession.create({
                data: {
                    poiId: s.poiId,
                    startAt: new Date(s.startAt),
                    endAt: s.endAt ? new Date(s.endAt) : null,
                    status: s.status,
                },
            })));
        }
        if (dto.hours?.length) {
            await Promise.all(dto.hours.map((h) => this.prisma.parkHours.upsert({
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
            })));
        }
        return { ok: true, capturedAt };
    }
};
exports.LiveService = LiveService;
exports.LiveService = LiveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LiveService);
//# sourceMappingURL=live.service.js.map