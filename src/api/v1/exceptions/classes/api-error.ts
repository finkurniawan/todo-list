import { HttpStatusCode } from '../types/http.model';
import { BaseError } from './base-error';

// eslint-disable-next-line import/prefer-default-export
export class APIError extends BaseError {
  constructor(
    message: string,
    methodName = '',
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    isOperational = true
  ) {
    super('', message, methodName, httpCode, isOperational);
  }
}
