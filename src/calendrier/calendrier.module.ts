import { Module } from '@nestjs/common';
import { CalendrierService } from './calendrier.service';
import { CalendrierController } from './calendrier.controller';
import { Calendrier } from './entities/calendrier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalendrierController],
  providers: [CalendrierService],
  imports: [TypeOrmModule.forFeature([Calendrier])],
})
export class CalendrierModule {}
