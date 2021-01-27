import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenmentsController } from './evenments/evenments.controller';
import { NouveautesController } from './nouveautes/nouveautes.controller';
import { EvenmentsService } from './evenments/evenments.service';
import { NouveautesService } from './nouveautes/nouveautes.service';
import { ClubsController } from './clubs/clubs.controller';
import { ClubsService } from './clubs/clubs.service';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    })
  ],
  controllers: [AppController, EvenmentsController, NouveautesController, ClubsController],
  providers: [AppService, EvenmentsService, NouveautesService, ClubsService],
})
export class AppModule {}
