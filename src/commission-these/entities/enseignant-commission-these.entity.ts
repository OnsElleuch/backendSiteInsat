import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  laboratoire: string;

  @ApiProperty()
  @Column()
  president: boolean;

  @ApiProperty()
  @Column()
  domaine: string;
}
