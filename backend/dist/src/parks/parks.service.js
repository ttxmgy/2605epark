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
exports.ParksService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let ParksService = class ParksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    listParks() {
        return this.prisma.park.findMany({ orderBy: { createdAt: 'asc' } });
    }
    createPark(dto) {
        return this.prisma.park.create({ data: { name: dto.name } });
    }
    listPois(parkId) {
        return this.prisma.poi.findMany({
            where: { parkId },
            orderBy: [{ type: 'asc' }, { name: 'asc' }],
        });
    }
    createPoi(parkId, dto) {
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
        const pois = [
            { type: client_1.PoiType.ATTRACTION, name: 'Attraction A', zone: 'Zone 1', lat: 39.849, lng: 116.565 },
            { type: client_1.PoiType.ATTRACTION, name: 'Attraction B', zone: 'Zone 1', lat: 39.8502, lng: 116.5662 },
            { type: client_1.PoiType.SHOW, name: 'Show A', zone: 'Zone 2', lat: 39.8488, lng: 116.5671 },
            { type: client_1.PoiType.RESTAURANT, name: 'Restaurant A', zone: 'Zone 2', lat: 39.8482, lng: 116.5658 },
        ];
        await this.prisma.poi.createMany({
            data: pois.map((p) => ({ ...p, parkId: park.id })),
        });
        return park;
    }
};
exports.ParksService = ParksService;
exports.ParksService = ParksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParksService);
//# sourceMappingURL=parks.service.js.map