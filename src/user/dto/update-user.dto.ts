import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// FIXME: hate this, do it properly
export class UpdateUserDto extends PartialType(CreateUserDto) {}
