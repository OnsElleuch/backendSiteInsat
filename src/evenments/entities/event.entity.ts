import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  club: string;

  @Column()
  descriptionClub: string;

  @Column()
  photo_url: string;
}
