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
exports.OcrService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let OcrService = class OcrService {
    config;
    constructor(config) {
        this.config = config;
    }
    async recognize(imageBase64) {
        const endpoint = this.config.get('OCR_ENDPOINT');
        const apiKey = this.config.get('OCR_API_KEY');
        if (!endpoint) {
            return '';
        }
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
            },
            body: JSON.stringify({ image_base64: imageBase64 }),
        });
        if (!res.ok) {
            return '';
        }
        const json = (await res.json());
        return (json?.text ?? json?.data?.text ?? '');
    }
};
exports.OcrService = OcrService;
exports.OcrService = OcrService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OcrService);
//# sourceMappingURL=ocr.service.js.map