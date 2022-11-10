import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ select: this.userSelect });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
    if (!record) throw new NotFoundException(`user not found`);
    return record;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    const data: Partial<User> = { ...dto };
    if (data.password) data.password = await bcrypt.hash(data.password, 10);

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(this.handleError);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || 'something happened',
    );
  }
}
