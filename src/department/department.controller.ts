import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}
  @Get('getLabs/:department')
  getLabsByDepartment(@Param('department') department: string) {
    return this.departmentService.getLabsByDepartment(department);
  }

  @Get('getEnseignant/:department/:grade')
  getEnseignantByDepartment(
    @Param('department') department: string,
    @Param('grade') grade: string,
  ) {
    return this.departmentService.getEnseignantByDepartment(department, grade);
  }
}