import { HttpStatus } from './http.enums';

export interface ApiResponse {
  statusCode: HttpStatus;
  message: string;
}
