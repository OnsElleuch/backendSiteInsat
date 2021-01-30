import { ApiProperty } from '@nestjs/swagger';
export class CreateNewsDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  photo_url: string;
}
