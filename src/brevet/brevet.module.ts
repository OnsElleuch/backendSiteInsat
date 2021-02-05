import { Module } from '@nestjs/common';
import { BrevetController } from './brevet.controller';
import { BrevetService } from './brevet.service';

@Module({
  controllers: [BrevetController],
  providers: [BrevetService],
})
export class BrevetModule {}
