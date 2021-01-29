import { PartialType } from '@nestjs/mapped-types';
import { CreateConventionDto } from './create-convention.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateConventionDto extends PartialType(CreateConventionDto) {
  @ApiProperty()
  etablissement: string;

  @ApiProperty()
  etranger: string;

  @ApiProperty()
  sujet: string;

  @ApiProperty()
  responsable: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  periode: string;

  @ApiProperty()
  observation: string;
}
