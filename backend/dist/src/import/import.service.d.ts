import { PrismaService } from '../prisma/prisma.service';
export declare class ImportService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private hashValue;
    saveParsed(params: {
        userId: string;
        type: string;
        captureTime?: string;
        rawPath?: string;
        parsed: any;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string;
        captureTime: string | null;
        rawPath: string | null;
        parsed: import("@prisma/client/runtime/library").JsonValue;
    }>;
    parseText(text: string): {
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
}
