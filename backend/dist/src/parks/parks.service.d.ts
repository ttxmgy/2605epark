import { PrismaService } from '../prisma/prisma.service';
import { CreateParkDto, CreatePoiDto } from './dto/parks.dto';
export declare class ParksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    seedSamplePark(name?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
