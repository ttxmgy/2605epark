import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { GuideMode } from '@prisma/client';

export class LocationDto {
  @IsNumber()
  lat!: number;

  @IsNumber()
  lng!: number;
}

export class GeneratePlanDto {
  @IsString()
  parkId!: string;

  @IsOptional()
  @IsEnum(GuideMode)
  mode?: GuideMode;

  @IsOptional()
  @IsString()
  template?: string;

  @ValidateNested()
  @Type(() => LocationDto)
  location!: LocationDto;
}

export class ReplanDto {
  @IsString()
  planId!: string;

  @IsString()
  eventType!: string;

  @IsOptional()
  @IsString()
  currentPoiId?: string;

  @ValidateNested()
  @Type(() => LocationDto)
  location!: LocationDto;

  @IsOptional()
  @IsInt()
  currentWaitMin?: number;

  @IsOptional()
  @IsInt()
  lastWaitMin?: number;
}
