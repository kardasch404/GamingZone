import { randomBytes } from 'crypto';

export class UUIDv7 {
  static generate(): string {
    const timestamp = BigInt(Date.now());
    const randomness = randomBytes(10);

    const timestampHex = timestamp.toString(16).padStart(12, '0');
    const randomHex = randomness.toString('hex');

    const uuid = [
      timestampHex.slice(0, 8),
      timestampHex.slice(8, 12),
      '7' + randomHex.slice(0, 3),
      ((parseInt(randomHex.slice(3, 5), 16) & 0x3f) | 0x80).toString(16).padStart(2, '0') +
        randomHex.slice(5, 7),
      randomHex.slice(7, 19),
    ].join('-');

    return uuid;
  }

  static isValid(uuid: string): boolean {
    const uuidv7Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidv7Regex.test(uuid);
  }
}
