import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EnseignantEntity } from '../../department/entities/enseignant.entity';

@Entity('Brevet')
export class BrevetEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  numeroDepot: string;

  @ApiProperty()
  @Column()
  dateDepot: Date;

  @ApiProperty()
  @Column()
  numeroEnregistrement: string;

  @ApiProperty()
  @Column()
  dateEnregistrement: Date;

  @ApiProperty()
  @ManyToMany(
    () => EnseignantEntity,
    (enseignant) => enseignant.brevetsInvention,
    { eager: true },
  )
  @JoinTable()
  inventeurs: EnseignantEntity[];
}
