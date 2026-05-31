import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImportController } from './import.controller';
import { ImportService } from './import.service';
import { OcrService } from './ocr.service';

@Module({
  imports: [ConfigModule],
  controllers: [ImportController],
  providers: [ImportService, OcrService],
})
export class ImportModule {}

