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
exports.IngestLiveDto = exports.IngestParkHoursDto = exports.IngestShowSessionDto = exports.IngestPoiLiveDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class IngestPoiLiveDto {
    poiId;
    status;
    waitMin;
}
exports.IngestPoiLiveDto = IngestPoiLiveDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestPoiLiveDto.prototype, "poiId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.PoiStatus),
    __metadata("design:type", String)
], IngestPoiLiveDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], IngestPoiLiveDto.prototype, "waitMin", void 0);
class IngestShowSessionDto {
    poiId;
    startAt;
    endAt;
    status;
}
exports.IngestShowSessionDto = IngestShowSessionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestShowSessionDto.prototype, "poiId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], IngestShowSessionDto.prototype, "startAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], IngestShowSessionDto.prototype, "endAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestShowSessionDto.prototype, "status", void 0);
class IngestParkHoursDto {
    date;
    venueName;
    openTime;
    closeTime;
}
exports.IngestParkHoursDto = IngestParkHoursDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestParkHoursDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestParkHoursDto.prototype, "venueName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestParkHoursDto.prototype, "openTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngestParkHoursDto.prototype, "closeTime", void 0);
class IngestLiveDto {
    poi;
    shows;
    hours;
}
exports.IngestLiveDto = IngestLiveDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IngestPoiLiveDto),
    __metadata("design:type", Array)
], IngestLiveDto.prototype, "poi", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IngestShowSessionDto),
    __metadata("design:type", Array)
], IngestLiveDto.prototype, "shows", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IngestParkHoursDto),
    __metadata("design:type", Array)
], IngestLiveDto.prototype, "hours", void 0);
//# sourceMappingURL=live.dto.js.map