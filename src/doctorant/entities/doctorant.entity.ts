import { BeforeInsert, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EtudiantEntity } from '../../etudiant/entities/etudiant.entity';
const bcrypt = require('bcrypt');

@Entity('doctorant')
export class DoctorantEntity extends EtudiantEntity {
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

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
