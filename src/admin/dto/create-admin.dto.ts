import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  privilege: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  profile_picture: string;
  @ApiProperty()
  mail: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  president?: string;
}
