import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
const bcrypt = require('bcrypt');

@Entity('etudiant')
export class EtudiantEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    nullable: false,
    unique: true,
  })
  name: string;
  @Column({
    nullable: false,
  })
  password: string;
  @Column({
    nullable: false,
  })
  CIN: string;
  @Column({
    nullable: false,
  })
  numEtudiant: string;
  @Column({
    nullable: false,
  })
  email: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
