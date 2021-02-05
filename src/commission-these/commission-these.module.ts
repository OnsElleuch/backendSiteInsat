import { Module } from '@nestjs/common';
import { CommissionTheseService } from './commission-these.service';
import { CommissionTheseController } from './commission-these.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnseignantCommissionTheseEntity } from './entities/enseignant-commission-these.entity';

@Module({
  providers: [CommissionTheseService],
  controllers: [CommissionTheseController],
  imports: [TypeOrmModule.forFeature([EnseignantCommissionTheseEntity])],
})
export class CommissionTheseModule {}
