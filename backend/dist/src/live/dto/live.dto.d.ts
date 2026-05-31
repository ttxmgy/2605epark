import { PoiStatus } from '@prisma/client';
export declare class IngestPoiLiveDto {
    poiId: string;
    status?: PoiStatus;
    waitMin?: number;
}
export declare class IngestShowSessionDto {
    poiId: string;
    startAt: string;
    endAt?: string;
    status?: string;
}
export declare class IngestParkHoursDto {
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
}
export declare class IngestLiveDto {
    poi?: IngestPoiLiveDto[];
    shows?: IngestShowSessionDto[];
    hours?: IngestParkHoursDto[];
}
