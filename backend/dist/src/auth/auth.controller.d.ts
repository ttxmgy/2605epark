import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly auth;
    private readonly jwt;
    constructor(auth: AuthService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            phone: string | null;
            email: string | null;
            nickname: string | null;
            createdAt: Date;
            profile: {
                mode: import("@prisma/client").$Enums.GuideMode;
                tags: import("@prisma/client/runtime/library").JsonValue;
            } | null;
        };
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: string;
            phone: string | null;
            email: string | null;
            nickname: string | null;
        };
        token: string;
    }>;
}
