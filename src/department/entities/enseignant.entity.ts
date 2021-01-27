import { Column, Entity, PrimaryColumn } from "typeorm";
import { DepartmentEnumEnum } from "../deprtment-enum.enum";
import { GradeEnum } from "../grade.enum";

@Entity('enseignant')
export class EnseignantEntity{
    @PrimaryColumn()
    email : string;

    @Column()
    name : string;

    @Column()
    lastName : string;

    @Column()
    discipline: string;

    @Column({
        type: 'enum',
        enum: DepartmentEnumEnum
    })
    department : DepartmentEnumEnum;

    @Column({
        type: 'enum',
        enum: GradeEnum
    })
    grade : GradeEnum;

}