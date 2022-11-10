import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// TODO: hate this, do it properly
export class UpdateUserDto extends PartialType(CreateUserDto) {}
