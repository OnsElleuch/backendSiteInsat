import { DepartmentEnumEnum } from '../deprtment-enum.enum';
import { GradeEnum } from '../grade.enum';

export class Enseignant {
  email: string;
  name: string;
  lastName: string;
  discipline: string;
  department: DepartmentEnumEnum;
  grade: GradeEnum;
}
