import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateEtudiantDto } from 'src/etudiant/dto/create-etudiant.dto';
import { EtudiantService } from 'src/etudiant/etudiant.service';
import { LoginUserDto } from './dto/login-etudiant.dto';
import { RegistrationStatus } from './registration-status';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: EtudiantService,
    private readonly jwtService: JwtService,
  ) {}
  async register(userDto: CreateEtudiantDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'Etudiant registered',
    };
    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }
  async login(loginUserDto: LoginUserDto) {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      user,
      ...token,
    };
  }

  private _createToken({ CIN }: CreateEtudiantDto): any {
    const user = { CIN };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
  async validateUser(payload) {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
