import { PartialType } from '@nestjs/mapped-types';
import { CreatePartenariatDto } from './create-partenariat.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartenariatDto extends PartialType(CreatePartenariatDto) {
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
