import { ApiProperty } from '@nestjs/swagger';
export class CreateContactAdminDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  numInscription: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  filiere: string;

  @ApiProperty()
  typeDemande: string;

  @ApiProperty()
  comment: string;
}
