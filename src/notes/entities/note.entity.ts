import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Notes')
export class Note {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  details: string;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  pdfUrl: string;
}
