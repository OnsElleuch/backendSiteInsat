import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePartenariatDto } from './dto/create-partenariat.dto';
import { UpdatePartenariatDto } from './dto/update-partenariat.dto';
import { Repository } from 'typeorm';
import { Partenariat } from './entities/partenariat.entity';

@Injectable()
export class PartenariatService {
  constructor(
    @InjectRepository(Partenariat)
    private readonly PartenariatRepository: Repository<Partenariat>,
  ) {}

  async create(createPartenariatDto: CreatePartenariatDto) {
    return await this.PartenariatRepository.save(createPartenariatDto);
  }

  async findAll() {
    return await this.PartenariatRepository.find();
  }

  async findOne(id: number) {
    return await this.PartenariatRepository.findOne(id);
  }

  async update(id: number, updatePartenariatDto: UpdatePartenariatDto) {
    return await this.PartenariatRepository.update(
      { id: id },
      updatePartenariatDto,
    );
  }

  async remove(id: number) {
    return await this.PartenariatRepository.delete(id);
  }
}
