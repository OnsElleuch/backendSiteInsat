import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
const bcrypt = require('bcrypt');

@Entity('Admin')
export class AdminEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  privilege: number;
  @Column()
  email: string;
  @Column()
  profile_picture: string;
  @Column()
  mail: string;
  @Column()
  description?: string;
  @Column()
  president?: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
