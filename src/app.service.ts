import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(baseUrl: string) {
    return { status: 'server is running! 🚀', docs: baseUrl + '/api' };
  }
}
