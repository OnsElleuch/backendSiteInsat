import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LaboratoireRechercheService } from './laboratoire-recherche.service';
import { LaboratoireRechercheDto } from './dto/Laboratoire-recherche';

@Controller('laboratoire-recherche')
export class LaboratoireRechercheController {
  constructor(
    private readonly laboratoireRechercheService: LaboratoireRechercheService,
  ) {}

  @Post()
  create(@Body() laboratoireRechercheDto: LaboratoireRechercheDto) {
    return this.laboratoireRechercheService.create(laboratoireRechercheDto);
  }

  @Get('getLaboratoiresRecherche')
  findLabos() {
    return this.laboratoireRechercheService.findLabos();
  }
  @Get('getUnitesDeRecherche')
  findUnites() {
    return this.laboratoireRechercheService.findUnites();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laboratoireRechercheService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() laboratoireRechercheDto: LaboratoireRechercheDto,
  ) {
    return this.laboratoireRechercheService.update(
      +id,
      laboratoireRechercheDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratoireRechercheService.remove(+id);
  }
}
