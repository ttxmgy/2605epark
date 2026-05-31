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
exports.ImportService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
const parser_1 = require("./parser");
let ImportService = class ImportService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    hashValue(v) {
        return (0, crypto_1.createHash)('sha256').update(v).digest('hex');
    }
    async saveParsed(params) {
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
            const code = params.parsed.voucher_code_text;
            const visitDate = params.parsed.visit_date;
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
    parseText(text) {
        return (0, parser_1.parseScreenshotText)(text);
    }
};
exports.ImportService = ImportService;
exports.ImportService = ImportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImportService);
//# sourceMappingURL=import.service.js.map