import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
const bcrypt = require('bcrypt');

@Entity('etudiant')
export class EtudiantEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  class: string;
  @Column()
  CIN: string;
  @Column()
  numEtudiant: string;
  @Column()
  email: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
