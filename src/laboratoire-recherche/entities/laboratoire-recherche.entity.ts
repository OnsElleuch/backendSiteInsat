import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('LaboratoireRecherche')
export class LaboratoireRechercheEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  code: string;

  @ApiProperty()
  @Column()
  etablissement: string;

  // lezem twalli relation
  @ApiProperty()
  @Column()
  responsable: string;

  @ApiProperty()
  @Column()
  type: string;
}
