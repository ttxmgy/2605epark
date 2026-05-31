import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PoiStatus } from '@prisma/client';

export class IngestPoiLiveDto {
  @IsString()
  poiId!: string;

  @IsOptional()
  @IsEnum(PoiStatus)
  status?: PoiStatus;

  @IsOptional()
  @IsInt()
  waitMin?: number;
}

export class IngestShowSessionDto {
  @IsString()
  poiId!: string;

  @IsDateString()
  startAt!: string;

  @IsOptional()
  @IsDateString()
  endAt?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

export class IngestParkHoursDto {
  @IsString()
  date!: string;

  @IsString()
  venueName!: string;

  @IsString()
  openTime!: string;

  @IsString()
  closeTime!: string;
}

export class IngestLiveDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngestPoiLiveDto)
  poi?: IngestPoiLiveDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngestShowSessionDto)
  shows?: IngestShowSessionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngestParkHoursDto)
  hours?: IngestParkHoursDto[];
}
