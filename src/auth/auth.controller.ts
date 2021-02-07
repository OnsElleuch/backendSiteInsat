import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { CreateEtudiantDto } from 'src/etudiant/dto/create-etudiant.dto';
import { AuthService } from './auth.service';
import { LoginAdminDto } from './dto/login-admin.dto';
import { LoginUserDto } from './dto/login-etudiant.dto';
import { RegistrationStatus } from './registration-status';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateEtudiantDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @Post('register-admin')
  public async registerAdmin(
    @Body() createUserDto: CreateAdminDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.registerAdmin(
      createUserDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login-admin')
  public async loginAdmin(@Body() loginUserDto: LoginAdminDto) {
    return await this.authService.loginAdmin(loginUserDto);
  }
}
