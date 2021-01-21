import { Column, Entity, PrimaryColumn } from "typeorm";
import { DepartmentEnumEnum } from "../deprtment-enum.enum";

@Entity('lab')
export class LabEntity{
    @PrimaryColumn()
    num : string;

    @Column()
    name: string;

    @Column({
        type : 'enum',
        enum : DepartmentEnumEnum
    })
    department : DepartmentEnumEnum;

}