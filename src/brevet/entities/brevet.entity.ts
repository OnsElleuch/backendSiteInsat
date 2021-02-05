import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Brevet')
export class BrevetEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  numeroDepot: string;

  @ApiProperty()
  @Column()
  dateDepot: Date;

  @ApiProperty()
  @Column()
  numeroEnregistrement: string;

  @ApiProperty()
  @Column()
  dateEnregistrement: Date;

  /*@ApiProperty()
  @Column()
  Inventeurs: string;*/
}
