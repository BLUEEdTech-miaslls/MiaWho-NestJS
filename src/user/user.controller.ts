import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'list all users' })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find user by id' })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'create user' })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update user info' })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'delete user' })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
