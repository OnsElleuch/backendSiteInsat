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
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';
import { Direction } from './models/direction';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
@ApiTags('direction')
@Controller('direction')
export class DirectionController {
  constructor(private directionService: DirectionService) {}

  @Get('getDirectionMembers')
  getDirectionMembers(): Promise<DirectionEntity[]> {
    return this.directionService.getDirectionMembersByService('Direction');
  }

  @Get('getAdministrationMembers')
  getAdministrationMembers(): Promise<DirectionEntity[]> {
    return this.directionService.getDirectionMembersByService('Administration');
  }

  @Get('getAllMembers')
  getAllMembers(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<DirectionEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.directionService.getAllMembers({
      page,
      limit,
      route: 'http://localhost:3000/direction/getAllMembers',
    });
  }

  @Get('getMemberById/:poste_code')
  getMemberById(@Param('poste_code') poste_code) {
    return this.directionService.getMemberById(poste_code);
  }

  @Post('addMember')
  addMember(@Body() member: Direction) {
    return this.directionService.addMember(member);
  }

  @Delete('deleteMemberById/:poste_code')
  deleMemberById(@Param() poste_code: number) {
    return this.directionService.deleteMemberById(poste_code);
  }
}
