import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'full name',
    example: 'Jane Doe',
  })
  name: string;
  @ApiProperty({
    description: 'email address',
    example: 'janedoe@miamail.com',
  })
  email: string;
  @ApiProperty({
    description:
      'min 8 chars, capital letter, lowercase letter, number, special character',
    example: '123456Aa!',
  })
  password: string;
}
