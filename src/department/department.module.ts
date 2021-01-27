import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { EnseignantEntity } from './entities/enseignant.entity';
import { LabEntity } from './entities/lab.entity';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [TypeOrmModule.forFeature([LabEntity, EnseignantEntity])]
})
export class DepartmentModule {}
