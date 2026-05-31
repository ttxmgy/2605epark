import { PrismaService } from '../prisma/prisma.service';
import { ProgressEventDto } from './dto/progress.dto';
export declare class ProgressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEvent(userId: string, dto: ProgressEventDto): import("@prisma/client").Prisma.Prisma__ProgressEventClient<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string;
        poiId: string | null;
        planId: string | null;
        payload: import("@prisma/client/runtime/library").JsonValue | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
