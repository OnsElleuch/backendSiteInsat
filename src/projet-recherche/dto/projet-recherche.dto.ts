import { ApiProperty } from '@nestjs/swagger';

export class ProjetRechercheDto {
  @ApiProperty()
  public cadre: string;

  @ApiProperty()
  public anneeCreation: string;

  @ApiProperty()
  public code: string;

  @ApiProperty()
  public titre: string;

  @ApiProperty()
  public responsable: string;
}
