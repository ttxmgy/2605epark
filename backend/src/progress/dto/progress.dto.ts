import { IsOptional, IsString } from 'class-validator';

export class ProgressEventDto {
  @IsString()
  type!: string;

  @IsOptional()
  @IsString()
  planId?: string;

  @IsOptional()
  @IsString()
  poiId?: string;

  payload?: unknown;
}

