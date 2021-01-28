import { ApiProperty } from '@nestjs/swagger';
export class CreateEventDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  club: string;
  @ApiProperty()
  descriptionClub: string;
  @ApiProperty()
  photo_url: string;
}
