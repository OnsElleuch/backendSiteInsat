import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@ApiTags('clubs')
@Controller('clubs')
export class ClubsController {
  constructor(private clubsService: ClubsService) {}
  @Get('getClubs')
  getClubs() {
    return this.clubsService.getClubs();
  }

  @Get('club/:id')
  getClubById(@Param('id') id: number) {
    return this.clubsService.getClubById(id);
  }
  @Post('createClub/')
  createClub(@Body() createClubDto: CreateClubDto) {
    return this.clubsService.createClub(createClubDto);
  }

  @Put('updateClub/:id')
  updateClub(@Param('id') id: number, @Body() updateClubDto: UpdateClubDto) {
    return this.clubsService.updateClub(id, updateClubDto);
  }

  @Delete('removeClub/:id')
  removeClub(@Param('id') id: number) {
    return this.clubsService.removeClub(id);
  }
}
