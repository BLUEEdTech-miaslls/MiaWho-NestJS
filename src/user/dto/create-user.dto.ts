import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'full name',
    example: 'Jane Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'email address',
    example: 'janedoe@miamail.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'min 8 chars',
    example: '12345678',
  })
  password: string;
}
