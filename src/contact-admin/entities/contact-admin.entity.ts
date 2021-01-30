import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('contact-admin')
export class ContactAdmin {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  numInscription: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  filiere: string;

  @ApiProperty()
  @Column()
  typeDemande: string;

  @ApiProperty()
  @Column()
  comment: string;
}
