import { ProgressEventDto } from './dto/progress.dto';
import { ProgressService } from './progress.service';
export declare class ProgressController {
    private readonly progress;
    constructor(progress: ProgressService);
    create(userId: string, dto: ProgressEventDto): import("@prisma/client").Prisma.Prisma__ProgressEventClient<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string;
        poiId: string | null;
        planId: string | null;
        payload: import("@prisma/client/runtime/library").JsonValue | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
