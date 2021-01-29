import { ApiProperty } from '@nestjs/swagger';

export class CreateConventionDto {
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
