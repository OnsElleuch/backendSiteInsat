import { Module } from '@nestjs/common';
import { ConventionService } from './convention.service';
import { ConventionController } from './convention.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convention } from './entities/convention.entity';
@Module({
  controllers: [ConventionController],
  providers: [ConventionService],
  imports: [TypeOrmModule.forFeature([Convention])],
})
export class ConventionModule {}
