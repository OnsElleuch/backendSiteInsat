import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { DoctorantService } from './doctorant.service';
import { DoctorantEntity } from './entities/doctorant.entity';

@Controller('doctorant')
export class DoctorantController {
  constructor(private readonly doctorantService: DoctorantService) {}

  @Post()
  create(@Body() doctorant: DoctorantEntity) {
    return this.doctorantService.create(doctorant);
  }

  @Get()
  findAll() {
    return this.doctorantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorantService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() doctorant: DoctorantEntity) {
    return this.doctorantService.update(+id, doctorant);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorantService.remove(+id);
  }
}
