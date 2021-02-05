import { Module } from '@nestjs/common';
import { LaboratoireRechercheService } from './laboratoire-recherche.service';
import { LaboratoireRechercheController } from './laboratoire-recherche.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoireRechercheEntity } from './entities/laboratoire-recherche.entity';

@Module({
  providers: [LaboratoireRechercheService],
  controllers: [LaboratoireRechercheController],
  imports: [TypeOrmModule.forFeature([LaboratoireRechercheEntity])],
})
export class LaboratoireRechercheModule {}
