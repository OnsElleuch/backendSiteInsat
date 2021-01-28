import { Controller, Get } from '@nestjs/common';
import { RendezVousService } from './rendez-vous.service';

@Controller('rendez-vous')
export class RendezVousController {
  constructor(private rendezVousService: RendezVousService) {}
  @Get('getLatestRendezVous')
  getLatestRendezVous() {
    return this.rendezVousService.getLatestRendezVous();
  }
}
