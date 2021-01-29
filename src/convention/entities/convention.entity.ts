import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Convention')
export class Convention {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  etablissement: string;

  @ApiProperty()
  @Column()
  etranger: string;

  @ApiProperty()
  @Column()
  sujet: string;

  @ApiProperty()
  @Column()
  responsable: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  periode: string;

  @ApiProperty()
  @Column()
  observation: string;
}
