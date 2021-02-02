import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { Enseignant } from './models/enseignant';
import { Lab } from './models/lab';

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

  @Post('addLab')
  addLab(@Body() lab: Lab) {
    return this.departmentService.addLab(lab);
  }

  @Post('addEnseignant')
  addEnseignant(@Body() enseignant: Enseignant) {
    return this.departmentService.addEnseignant(enseignant);
  }
}
