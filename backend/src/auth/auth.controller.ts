import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly jwt: JwtService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const user = await this.auth.register(dto);
    const token = await this.jwt.signAsync({ sub: user.id });
    return { user, token };
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.auth.validateLogin(dto);
    const token = await this.jwt.signAsync({ sub: user.id });
    return { user, token };
  }
}

