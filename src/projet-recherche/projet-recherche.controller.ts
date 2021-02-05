import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProjetRechercheService } from './projet-recherche.service';
import { ProjetRechercheDto } from './dto/projet-recherche.dto';

@Controller('projet-recherche')
export class ProjetRechercheController {
  constructor(
    private readonly projetRechercheService: ProjetRechercheService,
  ) {}

  @Post()
  create(@Body() projetRechercheDto: ProjetRechercheDto) {
    return this.projetRechercheService.create(projetRechercheDto);
  }

  @Get('getProjets')
  findAll() {
    return this.projetRechercheService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetRechercheService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() projetRechercheDto: ProjetRechercheDto,
  ) {
    return this.projetRechercheService.update(+id, projetRechercheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetRechercheService.remove(+id);
  }
}
