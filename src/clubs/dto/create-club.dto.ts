import { ApiProperty } from '@nestjs/swagger';
export class CreateClubDto {
  @ApiProperty()
  clubName: string;
  @ApiProperty()
  clubDescription: string;
  @ApiProperty()
  president: string;
  @ApiProperty()
  photo_url: string;
}
