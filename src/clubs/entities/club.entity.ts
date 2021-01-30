import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('club')
export class ClubEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  clubName: string;

  @ApiProperty()
  @Column()
  clubDescription: string;

  @ApiProperty()
  @Column()
  president: string;

  @ApiProperty()
  @Column()
  photo_url: string;
}
