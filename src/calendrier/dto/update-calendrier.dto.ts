import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendrierDto } from './create-calendrier.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCalendrierDto extends PartialType(CreateCalendrierDto) {
  @ApiProperty()
  id: number;
  @ApiProperty()
  pdfUrl: string;
}
