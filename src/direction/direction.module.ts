import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectionController } from './direction.controller';
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';

@Module({
  controllers: [DirectionController],
  providers: [DirectionService],
  imports: [TypeOrmModule.forFeature([DirectionEntity])],
})
export class DirectionModule {}
