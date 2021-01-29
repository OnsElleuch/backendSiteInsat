import { ApiProperty } from '@nestjs/swagger';
export class CreateNoteDto {
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
