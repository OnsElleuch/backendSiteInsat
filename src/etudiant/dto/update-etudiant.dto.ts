import { PartialType } from '@nestjs/mapped-types';
import { CreateEtudiantDto } from './create-etudiant.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateEtudiantDto extends PartialType(CreateEtudiantDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  class: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  CIN: string;
  @ApiProperty()
  numEtudiant: string;
  @ApiProperty()
  email: string;
}
