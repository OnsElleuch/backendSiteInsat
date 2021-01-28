import { Controller, Get, Param } from '@nestjs/common';
import { NouveautesService } from './nouveautes.service';

@Controller('nouveautes')
export class NouveautesController {
  constructor(private nouveautesService: NouveautesService) {}
  @Get('getNews')
  getNews() {
    return this.nouveautesService.getNews();
  }

  @Get('getNewsById/:id')
  getNewsById(@Param('id') id: number) {
    return this.nouveautesService.getNewsById(id);
  }
}
