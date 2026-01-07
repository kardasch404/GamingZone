import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { UUIDv7 } from '../utils/uuid.util';

@Injectable()
export class ParseUUIDv7Pipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (!UUIDv7.isValid(value)) {
      throw new BadRequestException('Invalid UUID v7 format');
    }
    return value;
  }
}
