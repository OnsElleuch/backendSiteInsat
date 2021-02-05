import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrevetService } from './brevet.service';
import { BrevetDto } from './dto/brevet.dto';

@ApiTags('brevet')
@Controller('brevet')
export class BrevetController {
  constructor(private readonly brevetService: BrevetService) {}
  @Post()
  create(@Body() BrevetDto: BrevetDto) {
    return this.brevetService.create(BrevetDto);
  }

  @Get('getBrevets')
  findAll() {
    return this.brevetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brevetService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() BrevetDto: BrevetDto) {
    return this.brevetService.update(+id, BrevetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brevetService.remove(+id);
  }
}
