import { ApiProperty } from '@nestjs/swagger';

export class CreatePartenariatDto {
  @ApiProperty()
  universite: string;

  @ApiProperty()
  societe: string;

  @ApiProperty()
  objet: string;

  @ApiProperty()
  responsable: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  duree: string;

  @ApiProperty()
  observation: string;
}
