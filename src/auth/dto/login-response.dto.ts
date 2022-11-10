import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'login generated JWT',
    example: 'TOKEN_AUTOMATICALLY_GENERATED',
  })
  token: string;

  @ApiProperty({
    description: 'data from authenticated user',
  })
  user: User;
}
