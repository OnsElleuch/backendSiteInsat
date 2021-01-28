import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ServiceEnumEnum } from '../service-enum.enum';

@Entity('direction')
export class DirectionEntity {
  @PrimaryColumn()
  poste_code: number;

  @Column()
  title: string;

  @Column()
  responsable: string;

  @Column()
  poste: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: ServiceEnumEnum,
  })
  service: ServiceEnumEnum;
}
