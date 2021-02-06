import { Column, Entity, PrimaryColumn } from 'typeorm';
import { EnseignantEntity } from '../../department/entities/enseignant.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('enseignantCommissionThese')
export class EnseignantCommissionTheseEntity extends EnseignantEntity {
  @ApiProperty()
  @Column()
  qualite: string;

  @ApiProperty()
  @Column()
  etablissement: string;

  @ApiProperty()
  @Column()
  universite: string;

  @ApiProperty()
  @Column()
  structureRecherche: string;

  @ApiProperty()
  @Column()
  président: boolean;

  // doit changer en relation
  @ApiProperty()
  @Column()
  laboratiore: string;

  @ApiProperty()
  @Column()
  domaine: string;
}
