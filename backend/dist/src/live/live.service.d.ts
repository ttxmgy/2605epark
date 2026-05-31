import { PrismaService } from '../prisma/prisma.service';
import { IngestLiveDto } from './dto/live.dto';
export declare class LiveService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getParkLive(parkId: string, date: string): Promise<{
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
