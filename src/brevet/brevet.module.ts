import { Module } from '@nestjs/common';
import { BrevetController } from './brevet.controller';
import { BrevetService } from './brevet.service';
import { BrevetEntity } from './entities/brevet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BrevetController],
  providers: [BrevetService],
  imports: [TypeOrmModule.forFeature([BrevetEntity])],
})
export class BrevetModule {}
