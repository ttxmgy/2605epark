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
exports.ReplanDto = exports.GeneratePlanDto = exports.LocationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class LocationDto {
    lat;
    lng;
}
exports.LocationDto = LocationDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "lng", void 0);
class GeneratePlanDto {
    parkId;
    mode;
    template;
    location;
}
exports.GeneratePlanDto = GeneratePlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePlanDto.prototype, "parkId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.GuideMode),
    __metadata("design:type", String)
], GeneratePlanDto.prototype, "mode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePlanDto.prototype, "template", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", LocationDto)
], GeneratePlanDto.prototype, "location", void 0);
class ReplanDto {
    planId;
    eventType;
    currentPoiId;
    location;
    currentWaitMin;
    lastWaitMin;
}
exports.ReplanDto = ReplanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReplanDto.prototype, "planId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReplanDto.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReplanDto.prototype, "currentPoiId", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", LocationDto)
], ReplanDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ReplanDto.prototype, "currentWaitMin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ReplanDto.prototype, "lastWaitMin", void 0);
//# sourceMappingURL=plans.dto.js.map