import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  readonly CIN: string;
  @ApiProperty()
  readonly password: string;
}
