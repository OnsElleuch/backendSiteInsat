import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentEnumEnum } from './deprtment-enum.enum';
import { EnseignantEntity } from './entities/enseignant.entity';
import { LabEntity } from './entities/lab.entity';
import { GradeEnum } from './grade.enum';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(LabEntity)
    private readonly LabRepository: Repository<LabEntity>,
    @InjectRepository(EnseignantEntity)
    private readonly EnseignantRepository: Repository<EnseignantEntity>,
  ) {}

  async getLabsByDepartment(departmentName: string): Promise<LabEntity[]> {
    return await this.LabRepository.find({
      department: DepartmentEnumEnum[departmentName],
    });
  }

  async getEnseignantByDepartment(departmentName: string, gradeName: string) {
    return await this.EnseignantRepository.find({
      department: DepartmentEnumEnum[departmentName],
      grade: GradeEnum[gradeName],
    });
  }
}
