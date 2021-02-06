import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { DepartmentEnumEnum } from '../deprtment-enum.enum';
import { GradeEnum } from '../grade.enum';
import { ApiProperty } from '@nestjs/swagger';
import { BrevetEntity } from '../../brevet/entities/brevet.entity';

@Entity('enseignant')
export class EnseignantEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  discipline: string;

  @Column({
    type: 'enum',
    enum: DepartmentEnumEnum,
  })
  department: DepartmentEnumEnum;

  @Column({
    type: 'enum',
    enum: GradeEnum,
  })
  grade: GradeEnum;

  @ApiProperty()
  @ManyToMany(() => BrevetEntity, (brevet) => brevet.inventeurs, {
    nullable: true,
  })
  brevetsInvention: BrevetEntity[];
}
