import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAdminDto } from 'src/auth/dto/login-admin.dto';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';
const bcrypt = require('bcrypt');

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly userRepo: Repository<AdminEntity>,
  ) {}

  async findByLogin({ email, password }: LoginAdminDto) {
    const user = await this.userRepo.findOne({ where: { email } });

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

  async create(userDto: CreateAdminDto) {
    const { email, password } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({
      where: { email },
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

  async findByPayload({ email }) {
    return await await this.userRepo.findOne({ where: { email } });
  }

  async update(id, UpdateAdminDto: UpdateAdminDto) {
    return await this.userRepo.update({ id }, UpdateAdminDto);
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async remove(id: string) {
    return await await this.userRepo.delete({ id: id });
  }
}
