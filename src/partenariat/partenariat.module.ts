import { Module } from '@nestjs/common';
import { PartenariatService } from './partenariat.service';
import { PartenariatController } from './partenariat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partenariat } from './entities/partenariat.entity';

@Module({
  controllers: [PartenariatController],
  providers: [PartenariatService],
  imports: [TypeOrmModule.forFeature([Partenariat])],
})
export class PartenariatModule {}
