import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PoiType } from '@prisma/client';

export class CreateParkDto {
  @IsString()
  name!: string;
}

export class CreatePoiDto {
  @IsEnum(PoiType)
  type!: PoiType;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  zone?: string;

  @IsNumber()
  lat!: number;

  @IsNumber()
  lng!: number;
}
