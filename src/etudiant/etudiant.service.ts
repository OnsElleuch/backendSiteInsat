import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EtudiantEntity } from './entities/etudiant.entity';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { LoginUserDto } from 'src/auth/dto/login-etudiant.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(EtudiantEntity)
    private readonly userRepo: Repository<EtudiantEntity>,
  ) {}

  async findByLogin({ CIN, password }: LoginUserDto) {
    const user = await this.userRepo.findOne({ where: { CIN } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async create(userDto: CreateEtudiantDto) {
    const { CIN, password, email } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({
      where: { CIN },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userRepo.create(userDto);
    await this.userRepo.save(user);
    return user;
  }
  async findOne(id) {
    return await await this.userRepo.findOne({ where: { id } });
  }

  async findByPayload({ CIN }) {
    return await await this.userRepo.findOne({ where: { CIN } });
  }

  async update(id, updateEtudiantDto: UpdateEtudiantDto) {
    return await this.userRepo.update({ id }, updateEtudiantDto);
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async remove(id: string) {
    return await await this.userRepo.delete({ id: id });
  }
}
