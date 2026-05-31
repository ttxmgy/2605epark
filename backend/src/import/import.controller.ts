import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { promises as fs } from 'fs';
import { extname, join } from 'path';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CurrentUserId } from '../auth/current-user.decorator';
import { ImportService } from './import.service';
import { OcrService } from './ocr.service';

function generateFilename(file: Express.Multer.File) {
  const suffix = extname(file.originalname || '.png');
  return `${Date.now()}-${Math.random().toString(16).slice(2)}${suffix}`;
}

@UseGuards(JwtAuthGuard)
@Controller('import')
export class ImportController {
  constructor(
    private readonly config: ConfigService,
    private readonly ocr: OcrService,
    private readonly imports: ImportService,
  ) {}

  @Post('screenshot')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
    }),
  )
  async uploadScreenshot(
    @CurrentUserId() userId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    const uploadDir = this.config.get<string>('UPLOAD_DIR') ?? './uploads';
    const rawPath = file ? join(uploadDir, generateFilename(file)) : undefined;
    const captureTime = body.captureTime as string | undefined;

    const textInput = (body.text as string | undefined) ?? '';
    const text =
      textInput.trim().length > 0
        ? textInput
        : file?.buffer
          ? await this.ocr.recognize(file.buffer.toString('base64'))
          : '';

    if (file?.buffer && rawPath) {
      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(rawPath, file.buffer);
    }

    const parsed = this.imports.parseText(text);
    const artifact = await this.imports.saveParsed({
      userId,
      type: parsed.page_type ?? 'UNKNOWN',
      captureTime,
      rawPath,
      parsed,
    });

    return { artifact_id: artifact.id, parsed };
  }
}
