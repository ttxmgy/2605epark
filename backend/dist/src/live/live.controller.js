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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const live_dto_1 = require("./dto/live.dto");
const live_service_1 = require("./live.service");
let LiveController = class LiveController {
    live;
    constructor(live) {
        this.live = live;
    }
    getLive(parkId, date) {
        const d = date ?? new Date().toISOString().slice(0, 10);
        return this.live.getParkLive(parkId, d);
    }
    ingest(parkId, dto) {
        return this.live.ingest(parkId, dto);
    }
};
exports.LiveController = LiveController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('parkId')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LiveController.prototype, "getLive", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('ingest'),
    __param(0, (0, common_1.Param)('parkId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, live_dto_1.IngestLiveDto]),
    __metadata("design:returntype", void 0)
], LiveController.prototype, "ingest", null);
exports.LiveController = LiveController = __decorate([
    (0, common_1.Controller)('parks/:parkId/live'),
    __metadata("design:paramtypes", [live_service_1.LiveService])
], LiveController);
//# sourceMappingURL=live.controller.js.map