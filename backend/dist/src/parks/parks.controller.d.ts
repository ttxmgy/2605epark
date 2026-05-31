import { CreateParkDto, CreatePoiDto } from './dto/parks.dto';
import { ParksService } from './parks.service';
export declare class ParksController {
    private readonly parks;
    constructor(parks: ParksService);
    listParks(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }[]>;
    createPark(dto: CreateParkDto): import("@prisma/client").Prisma.Prisma__ParkClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    listPois(parkId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tags: import("@prisma/client/runtime/library").JsonValue | null;
        name: string;
        parkId: string;
        type: import("@prisma/client").$Enums.PoiType;
        zone: string | null;
        lat: number;
        lng: number;
    }[]>;
    createPoi(parkId: string, dto: CreatePoiDto): import("@prisma/client").Prisma.Prisma__PoiClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tags: import("@prisma/client/runtime/library").JsonValue | null;
        name: string;
        parkId: string;
        type: import("@prisma/client").$Enums.PoiType;
        zone: string | null;
        lat: number;
        lng: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    seed(name?: string, body?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
