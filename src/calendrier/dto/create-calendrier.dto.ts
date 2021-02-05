import { ApiProperty } from '@nestjs/swagger';
export class CreateCalendrierDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  details: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  pdfUrl: string;
}
