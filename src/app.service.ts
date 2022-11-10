import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n Check 🔗 http://localhost:3333/api for Swagger docs';
  }
}
