import { ApiProperty } from '@nestjs/swagger';
export class BrevetDto {
  @ApiProperty()
  numeroDepot: string;
  @ApiProperty()
  dateDepot: Date;
  @ApiProperty()
  numeroEnregistrement: string;
  @ApiProperty()
  dateEnregistrement: Date;
}
