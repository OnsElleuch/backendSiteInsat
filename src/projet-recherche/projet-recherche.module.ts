import { Module } from '@nestjs/common';
import { ProjetRechercheService } from './projet-recherche.service';
import { ProjetRechercheController } from './projet-recherche.controller';

@Module({
  providers: [ProjetRechercheService],
  controllers: [ProjetRechercheController],
})
export class ProjetRechercheModule {}
