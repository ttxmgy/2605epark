import { IngestLiveDto } from './dto/live.dto';
import { LiveService } from './live.service';
export declare class LiveController {
    private readonly live;
    constructor(live: LiveService);
    getLive(parkId: string, date?: string): Promise<{
        date: string;
        poi: {
            live: {
                capturedAt: Date;
                status: import("@prisma/client").$Enums.PoiStatus;
                waitMin: number | null;
            } | null;
            id: string;
            name: string;
            type: import("@prisma/client").$Enums.PoiType;
            zone: string | null;
            lat: number;
            lng: number;
        }[];
        shows: {
            poiId: string;
            status: string | null;
            startAt: Date;
            endAt: Date | null;
        }[];
        hours: {
            id: string;
            createdAt: Date;
            parkId: string;
            date: string;
            venueName: string;
            openTime: string;
            closeTime: string;
        }[];
    }>;
    ingest(parkId: string, dto: IngestLiveDto): Promise<{
        ok: boolean;
        capturedAt: Date;
    }>;
}
