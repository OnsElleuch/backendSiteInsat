import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';
@ApiTags('direction')
@Controller('direction')
export class DirectionController {
  constructor(private directionService: DirectionService) {}

  @Get('getDirectionMembers')
  getDirectionMembers(): Promise<DirectionEntity[]> {
    return this.directionService.getDirectionMembers();
  }

  @Get('getAdministrationMembers')
  getAdministrationMembers(): Promise<DirectionEntity[]> {
    return this.directionService.getAdministrationMembers();
  }
}
