import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectionModule } from './direction/direction.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { DepartmentModule } from './department/department.module';
import { DirectionService } from './direction/direction.service';
import { CalendrierModule } from './calendrier/calendrier.module';
import { PartenariatModule } from './partenariat/partenariat.module';

dotenv.config();
@Module({
  imports: [
    DirectionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RendezVousModule,
    DepartmentModule,
    CalendrierModule,
    PartenariatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
