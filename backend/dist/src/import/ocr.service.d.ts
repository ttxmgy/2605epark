import { ConfigService } from '@nestjs/config';
export declare class OcrService {
    private readonly config;
    constructor(config: ConfigService);
    recognize(imageBase64: string): Promise<string>;
}
