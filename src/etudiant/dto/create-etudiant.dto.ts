import { ApiProperty } from '@nestjs/swagger';
export class CreateEtudiantDto {
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
