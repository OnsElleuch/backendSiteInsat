import { ApiProperty } from '@nestjs/swagger';

export class LaboratoireRechercheDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  etablissement: string;

  @ApiProperty()
  responsable: string;

  @ApiProperty()
  type: string;
}
