import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DepartmentService } from './department.service';
import { EnseignantEntity } from './entities/enseignant.entity';
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

  @Get('getAllEnseignants')
  getAllEnseignants(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<EnseignantEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.departmentService.getAllEnseignants({
      page,
      limit,
      route: 'http://localhost:3000/department/getAllEnseignants',
    });
  }

  @Get('getEnseignantById/:email')
  getEnseignantById(@Param('email') email: string) {
    return this.departmentService.getEnseignantById(email);
  }

  @Delete('deleteEnseignantById/:email')
  deleteEnseignantById(@Param('email') email: string) {
    return this.departmentService.deleteEnseignantById(email);
  }
}
