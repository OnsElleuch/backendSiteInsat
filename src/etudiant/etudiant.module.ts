import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { EtudiantEntity } from './entities/etudiant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EtudiantController],
  providers: [EtudiantService],
  imports: [TypeOrmModule.forFeature([EtudiantEntity])],
  exports: [EtudiantService],
})
export class EtudiantModule {}
