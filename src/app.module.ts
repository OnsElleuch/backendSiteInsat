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
import { EventEntity } from './evenments/entities/event.entity';
import { NewsEntity } from './nouveautes/entities/news.entity';
import { ClubEntity } from './clubs/entities/club.entity';
import { DirectionModule } from './direction/direction.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { DepartmentModule } from './department/department.module';
import { DirectionService } from './direction/direction.service';
import { CalendrierModule } from './calendrier/calendrier.module';
import { NotesModule } from './notes/notes.module';
import { PartenariatModule } from './partenariat/partenariat.module';
import { ConventionModule } from './convention/convention.module';
import { ContactAdminModule } from './contact-admin/contact-admin.module';

import { BrevetModule } from './brevet/brevet.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { AuthModule } from './auth/auth.module';
import { ArticleScientifiqueModule } from './article-scientifique/article-scientifique.module';
import { AdminModule } from './admin/admin.module';
import { AdminEntity } from './admin/entities/admin.entity';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, NewsEntity, ClubEntity]),
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
    NotesModule,
    PartenariatModule,
    ConventionModule,
    ContactAdminModule,
    BrevetModule,
    EtudiantModule,
    AdminModule,
    AuthModule,
    ArticleScientifiqueModule,
  ],
  controllers: [
    AppController,
    EvenmentsController,
    NouveautesController,
    ClubsController,
    AdminController,
  ],
  providers: [
    AppService,
    EvenmentsService,
    NouveautesService,
    ClubsService,
    AdminService,
  ],
})
export class AppModule {}
