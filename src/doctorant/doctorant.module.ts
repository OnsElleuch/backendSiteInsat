import { Module } from '@nestjs/common';
import { DoctorantController } from './doctorant.controller';
import { DoctorantService } from './doctorant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorantEntity } from './entities/doctorant.entity';

@Module({
  controllers: [DoctorantController],
  providers: [DoctorantService],
  imports: [TypeOrmModule.forFeature([DoctorantEntity])],
})
export class DoctorantModule {}
