import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Calendrier')
export class Calendrier {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  details: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  pdfUrl: string;
}
