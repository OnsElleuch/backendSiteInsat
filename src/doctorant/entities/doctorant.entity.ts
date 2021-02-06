import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Doctorant')
export class DoctorantEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  etablissement: string;

  @ApiProperty()
  @Column()
  specialite: string;

  @ApiProperty()
  @Column()
  soutenance: Date;

  @ApiProperty()
  @Column()
  cotutelle: boolean;
}
