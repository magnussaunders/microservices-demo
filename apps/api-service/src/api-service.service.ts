import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiServiceService {
  getHello(): string {
    return 'api-service';
  }
}
