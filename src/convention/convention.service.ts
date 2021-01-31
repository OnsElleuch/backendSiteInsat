import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';
import { Repository } from 'typeorm';
import { Convention } from './entities/convention.entity';

@Injectable()
export class ConventionService {
  constructor(
    @InjectRepository(Convention)
    private readonly ConventionRepository: Repository<Convention>,
  ) {}

  async create(createConventionDto: CreateConventionDto) {
    return await this.ConventionRepository.save(createConventionDto);
  }

  async findAll() {
    return await this.ConventionRepository.find();
  }

  async findOne(id: number) {
    return await this.ConventionRepository.findOne(id);
  }

  async update(id: number, updateConventionDto: UpdateConventionDto) {
    return await this.ConventionRepository.update(
      { id: id },
      updateConventionDto,
    );
  }

  async remove(id: number) {
    return await this.ConventionRepository.delete(id);
  }
}
