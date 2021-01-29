import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RendezVousService } from './rendez-vous.service';
@ApiTags('rendez-vous')
@Controller('rendez-vous')
export class RendezVousController {
  constructor(private rendezVousService: RendezVousService) {}
  @Get('getLatestRendezVous')
  getLatestRendezVous() {
    return this.rendezVousService.getLatestRendezVous();
  }
}
