import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OcrService {
  constructor(private readonly config: ConfigService) {}

  async recognize(imageBase64: string) {
    const endpoint = this.config.get<string>('OCR_ENDPOINT');
    const apiKey = this.config.get<string>('OCR_API_KEY');

    if (!endpoint) {
      return '';
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({ image_base64: imageBase64 }),
    });

    if (!res.ok) {
      return '';
    }

    const json = (await res.json()) as any;
    return (json?.text ?? json?.data?.text ?? '') as string;
  }
}

