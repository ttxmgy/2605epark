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
exports.ImportController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs_1 = require("fs");
const path_1 = require("path");
const auth_guard_1 = require("../auth/auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const import_service_1 = require("./import.service");
const ocr_service_1 = require("./ocr.service");
function generateFilename(file) {
    const suffix = (0, path_1.extname)(file.originalname || '.png');
    return `${Date.now()}-${Math.random().toString(16).slice(2)}${suffix}`;
}
let ImportController = class ImportController {
    config;
    ocr;
    imports;
    constructor(config, ocr, imports) {
        this.config = config;
        this.ocr = ocr;
        this.imports = imports;
    }
    async uploadScreenshot(userId, file, body) {
        const uploadDir = this.config.get('UPLOAD_DIR') ?? './uploads';
        const rawPath = file ? (0, path_1.join)(uploadDir, generateFilename(file)) : undefined;
        const captureTime = body.captureTime;
        const textInput = body.text ?? '';
        const text = textInput.trim().length > 0
            ? textInput
            : file?.buffer
                ? await this.ocr.recognize(file.buffer.toString('base64'))
                : '';
        if (file?.buffer && rawPath) {
            await fs_1.promises.mkdir(uploadDir, { recursive: true });
            await fs_1.promises.writeFile(rawPath, file.buffer);
        }
        const parsed = this.imports.parseText(text);
        const artifact = await this.imports.saveParsed({
            userId,
            type: parsed.page_type ?? 'UNKNOWN',
            captureTime,
            rawPath,
            parsed,
        });
        return { artifact_id: artifact.id, parsed };
    }
};
exports.ImportController = ImportController;
__decorate([
    (0, common_1.Post)('screenshot'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, current_user_decorator_1.CurrentUserId)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ImportController.prototype, "uploadScreenshot", null);
exports.ImportController = ImportController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('import'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        ocr_service_1.OcrService,
        import_service_1.ImportService])
], ImportController);
//# sourceMappingURL=import.controller.js.map