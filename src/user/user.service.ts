import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  findAll() {
    return 'find all users';
  }

  create(dto: CreateUserDto) {
    return JSON.stringify(dto);
  }
}
