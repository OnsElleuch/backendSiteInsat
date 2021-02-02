import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';
import { Direction } from './models/direction';
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

  @Post('addMember')
  addMember(@Body() member: Direction) {
    return this.directionService.addMember(member);
  }
}
