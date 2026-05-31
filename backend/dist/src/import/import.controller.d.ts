import { ConfigService } from '@nestjs/config';
import { ImportService } from './import.service';
import { OcrService } from './ocr.service';
export declare class ImportController {
    private readonly config;
    private readonly ocr;
    private readonly imports;
    constructor(config: ConfigService, ocr: OcrService, imports: ImportService);
    uploadScreenshot(userId: string, file: Express.Multer.File, body: any): Promise<{
        artifact_id: string;
        parsed: {
            page_type: string;
            text: string;
            items?: undefined;
            visit_date?: undefined;
            entry_time_window?: undefined;
            guest_name?: undefined;
            voucher_code_text?: undefined;
            month?: undefined;
            venues?: undefined;
            wait_badges?: undefined;
            next_times?: undefined;
        } | {
            page_type: string;
            items: any[];
            text: string;
            visit_date?: undefined;
            entry_time_window?: undefined;
            guest_name?: undefined;
            voucher_code_text?: undefined;
            month?: undefined;
            venues?: undefined;
            wait_badges?: undefined;
            next_times?: undefined;
        } | {
            page_type: string;
            visit_date: string | null;
            entry_time_window: string | null;
            guest_name: string | null;
            voucher_code_text: string | null;
            text: string;
            items?: undefined;
            month?: undefined;
            venues?: undefined;
            wait_badges?: undefined;
            next_times?: undefined;
        } | {
            page_type: string;
            month: string | null;
            venues: any[];
            text: string;
            items?: undefined;
            visit_date?: undefined;
            entry_time_window?: undefined;
            guest_name?: undefined;
            voucher_code_text?: undefined;
            wait_badges?: undefined;
            next_times?: undefined;
        } | {
            page_type: string;
            wait_badges: number[];
            text: string;
            items?: undefined;
            visit_date?: undefined;
            entry_time_window?: undefined;
            guest_name?: undefined;
            voucher_code_text?: undefined;
            month?: undefined;
            venues?: undefined;
            next_times?: undefined;
        } | {
            page_type: string;
            next_times: string[];
            text: string;
            items?: undefined;
            visit_date?: undefined;
            entry_time_window?: undefined;
            guest_name?: undefined;
            voucher_code_text?: undefined;
            month?: undefined;
            venues?: undefined;
            wait_badges?: undefined;
        };
    }>;
}
