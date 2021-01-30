import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrevetEntity } from './entities/brevet.entity';
import { BrevetDto } from './dto/brevet.dto';

@Injectable()
export class BrevetService {
  constructor(
    @InjectRepository(BrevetEntity)
    private readonly BrevetRepository: Repository<BrevetEntity>,
  ) {}

  async create(BrevetDto: BrevetDto) {
    return await this.BrevetRepository.save(BrevetDto);
  }

  async findAll() {
    return await this.BrevetRepository.find();
  }

  async findOne(id: number) {
    return await this.BrevetRepository.findOne(id);
  }

  async update(id: number, updateBrevetDto: BrevetDto) {
    return await this.BrevetRepository.update({ id: id }, updateBrevetDto);
  }

  async remove(id: number) {
    return await this.BrevetRepository.delete(id);
  }
}
