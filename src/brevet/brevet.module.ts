import { Module } from '@nestjs/common';
import { BrevetController } from './brevet.controller';
import { BrevetService } from './brevet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrevetEntity } from './entities/brevet.entity';

@Module({
  controllers: [BrevetController],
  providers: [BrevetService],
  imports: [TypeOrmModule.forFeature([BrevetEntity])],
})
export class BrevetModule {}
