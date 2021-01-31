import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ConventionService } from './convention.service';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';

@Controller('convention')
export class ConventionController {
  constructor(private readonly conventionService: ConventionService) {}

  @Post()
  create(@Body() createConventionDto: CreateConventionDto) {
    return this.conventionService.create(createConventionDto);
  }

  @Get()
  findAll() {
    return this.conventionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conventionService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateConventionDto: UpdateConventionDto,
  ) {
    return this.conventionService.update(+id, updateConventionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conventionService.remove(+id);
  }
}
