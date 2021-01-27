import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendezVousEntity } from './entities/rendez-vous.entity';
import { RendezVousController } from './rendez-vous.controller';
import { RendezVousService } from './rendez-vous.service';

@Module({
  controllers: [RendezVousController],
  providers: [RendezVousService],
  imports: [
    TypeOrmModule.forFeature([RendezVousEntity])
  ]
})
export class RendezVousModule {}
