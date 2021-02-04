import { ApiProperty } from '@nestjs/swagger';

export class CreateRendezVousDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  photoUrl: string;
}
