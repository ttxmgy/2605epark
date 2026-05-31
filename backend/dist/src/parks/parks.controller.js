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
exports.ParksController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const parks_dto_1 = require("./dto/parks.dto");
const parks_service_1 = require("./parks.service");
let ParksController = class ParksController {
    parks;
    constructor(parks) {
        this.parks = parks;
    }
    listParks() {
        return this.parks.listParks();
    }
    createPark(dto) {
        return this.parks.createPark(dto);
    }
    listPois(parkId) {
        return this.parks.listPois(parkId);
    }
    createPoi(parkId, dto) {
        return this.parks.createPoi(parkId, dto);
    }
    seed(name, body) {
        return this.parks.seedSamplePark(name ?? body?.name);
    }
};
exports.ParksController = ParksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParksController.prototype, "listParks", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parks_dto_1.CreateParkDto]),
    __metadata("design:returntype", void 0)
], ParksController.prototype, "createPark", null);
__decorate([
    (0, common_1.Get)(':parkId/pois'),
    __param(0, (0, common_1.Param)('parkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParksController.prototype, "listPois", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':parkId/pois'),
    __param(0, (0, common_1.Param)('parkId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, parks_dto_1.CreatePoiDto]),
    __metadata("design:returntype", void 0)
], ParksController.prototype, "createPoi", null);
__decorate([
    (0, common_1.Post)('dev/seed'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ParksController.prototype, "seed", null);
exports.ParksController = ParksController = __decorate([
    (0, common_1.Controller)('parks'),
    __metadata("design:paramtypes", [parks_service_1.ParksService])
], ParksController);
//# sourceMappingURL=parks.controller.js.map