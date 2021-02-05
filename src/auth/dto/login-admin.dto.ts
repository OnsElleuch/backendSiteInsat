import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminDto {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
}
