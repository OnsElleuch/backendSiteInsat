import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EtudiantEntity } from '../../etudiant/entities/etudiant.entity';

@Entity('Doctorant')
export class DoctorantEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  etablissement: string;

  @ApiProperty()
  @Column()
  specialite: string;

  @ApiProperty()
  @Column()
  soutenance: Date;

  @ApiProperty()
  @Column()
  cotutelle: boolean;

  @ApiProperty()
  @OneToOne(() => EtudiantEntity, {
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  etudiant: EtudiantEntity;
}
