import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EtudiantModule } from 'src/etudiant/etudiant.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import * as dotenv from 'dotenv';
import { AdminModule } from 'src/admin/admin.module';
import { AdminService } from 'src/admin/admin.service';
dotenv.config();

@Module({
  imports: [
    EtudiantModule,
    AdminModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIREKEY,
      },
      secretOrPrivateKey: process.env.SECRETKEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, AdminService],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
