import { ApiProperty } from '@nestjs/swagger';
export class CreateEtudiantDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  CIN: string;
  @ApiProperty()
  numEtudiant: string;
  @ApiProperty()
  email: string;
}
