import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  club: string;

  @ApiProperty()
  @Column()
  descriptionClub: string;

  @ApiProperty()
  @Column()
  photo_url: string;
}
