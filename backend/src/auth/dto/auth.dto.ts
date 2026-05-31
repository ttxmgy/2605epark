import { IsEmail, IsOptional, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsOptional()
  @IsPhoneNumber('CN')
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsOptional()
  @IsString()
  nickname?: string;
}

export class LoginDto {
  @IsOptional()
  @IsPhoneNumber('CN')
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  password!: string;
}

