export class ResponseDto<T> {
  success: boolean;
  data?: T;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };

  constructor(success: boolean, data?: T, message?: string, meta?: ResponseDto<T>['meta']) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.meta = meta;
  }

  static success<T>(data: T, message?: string): ResponseDto<T> {
    return new ResponseDto(true, data, message);
  }

  static error<T>(message: string): ResponseDto<T> {
    return new ResponseDto(false, undefined, message);
  }

  static paginated<T>(
    data: T,
    page: number,
    limit: number,
    total: number,
  ): ResponseDto<T> {
    return new ResponseDto(true, data, undefined, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  }
}
