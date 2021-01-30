import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Partenariat')
export class Partenariat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  universite: string;

  @ApiProperty()
  @Column()
  societe: string;

  @ApiProperty()
  @Column()
  objet: string;

  @ApiProperty()
  @Column()
  responsable: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  duree: string;

  @ApiProperty()
  @Column()
  observation: string;
}
