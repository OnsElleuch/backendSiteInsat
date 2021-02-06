import { Module } from '@nestjs/common';
import { ProjetRechercheService } from './projet-recherche.service';
import { ProjetRechercheController } from './projet-recherche.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetRechercheEntity } from './entities/projet-recherche.entity';

@Module({
  providers: [ProjetRechercheService],
  controllers: [ProjetRechercheController],
  imports: [TypeOrmModule.forFeature([ProjetRechercheEntity])],
})
export class ProjetRechercheModule {}
