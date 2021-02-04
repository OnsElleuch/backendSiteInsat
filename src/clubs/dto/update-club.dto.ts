import { PartialType } from '@nestjs/mapped-types';
import { CreateClubDto } from './create-club.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClubDto extends PartialType(CreateClubDto) {
  @ApiProperty()
  id: number;
}
