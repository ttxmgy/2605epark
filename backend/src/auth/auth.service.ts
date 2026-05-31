import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    if (!dto.phone && !dto.email) {
      throw new BadRequestException('phone_or_email_required');
    }

    const existing = await this.prisma.user.findFirst({
      where: {
        OR: [
          dto.phone ? { phone: dto.phone } : undefined,
          dto.email ? { email: dto.email } : undefined,
        ].filter(Boolean) as any,
      },
      select: { id: true },
    });

    if (existing) {
      throw new BadRequestException('user_already_exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        phone: dto.phone,
        email: dto.email,
        passwordHash,
        nickname: dto.nickname,
        profile: { create: {} },
      },
      select: {
        id: true,
        phone: true,
        email: true,
        nickname: true,
        createdAt: true,
        profile: { select: { mode: true, tags: true } },
      },
    });

    return user;
  }

  async validateLogin(dto: LoginDto) {
    if (!dto.phone && !dto.email) {
      throw new BadRequestException('phone_or_email_required');
    }

    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          dto.phone ? { phone: dto.phone } : undefined,
          dto.email ? { email: dto.email } : undefined,
        ].filter(Boolean) as any,
      },
    });

    if (!user) {
      throw new UnauthorizedException('invalid_credentials');
    }

    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('invalid_credentials');
    }

    return {
      id: user.id,
      phone: user.phone,
      email: user.email,
      nickname: user.nickname,
    };
  }
}

