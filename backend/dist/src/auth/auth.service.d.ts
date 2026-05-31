import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(dto: RegisterDto): Promise<{
        id: string;
        phone: string | null;
        email: string | null;
        nickname: string | null;
        createdAt: Date;
        profile: {
            mode: import("@prisma/client").$Enums.GuideMode;
            tags: import("@prisma/client/runtime/library").JsonValue;
        } | null;
    }>;
    validateLogin(dto: LoginDto): Promise<{
        id: string;
        phone: string | null;
        email: string | null;
        nickname: string | null;
    }>;
}
