import { PrismaService } from '../prisma/prisma.service';
import { GeneratePlanDto, ReplanDto } from './dto/plans.dto';
export declare class PlansService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private loadCandidates;
    generate(userId: string, dto: GeneratePlanDto): Promise<{
        plan: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            mode: import("@prisma/client").$Enums.GuideMode;
            parkId: string;
            template: string | null;
            data: import("@prisma/client/runtime/library").JsonValue;
        };
        next_action: {
            poi_id: string;
            poi_type: import("@prisma/client").$Enums.PoiType;
            title: string;
            why: string[];
            walk_eta_min: number;
            wait_min: number | null;
        };
    }>;
    replan(userId: string, dto: ReplanDto): Promise<{
        plan_id: string;
        event_type: string;
        ui_directive: {
            presentation: string;
            default_selected: string;
        };
        keep_option: {
            poi_id: string;
            poi_type: import("@prisma/client").$Enums.PoiType;
            title: string;
            walk_eta_min: number;
            wait_min: number;
            expected_total_min: number;
        };
        alternatives: {
            poi_id: string;
            poi_type: import("@prisma/client").$Enums.PoiType;
            title: string;
            walk_eta_min: number;
            expected_wait_min: number | null;
            expected_total_min: number;
            save_total_min: number;
            swap_reason: string;
            risk_flags: never[];
            explain: string[];
        }[];
        alerts: {
            type: string;
            severity: string;
            message: string;
        }[];
    }>;
    getPlan(userId: string, planId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        mode: import("@prisma/client").$Enums.GuideMode;
        parkId: string;
        template: string | null;
        data: import("@prisma/client/runtime/library").JsonValue;
    }>;
}
