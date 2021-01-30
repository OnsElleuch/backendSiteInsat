import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendrier } from './entities/calendrier.entity';
import { CreateCalendrierDto } from './dto/create-calendrier.dto';
import { UpdateCalendrierDto } from './dto/update-calendrier.dto';

@Injectable()
export class CalendrierService {
  constructor(
    @InjectRepository(Calendrier)
    private readonly CalendrierRepository: Repository<Calendrier>,
  ) {}
  async create(createCalendrierDto: CreateCalendrierDto) {
    return await this.CalendrierRepository.save(createCalendrierDto);
  }

  async findAll() {
    return await this.CalendrierRepository.find();
  }

  async findOne(id: number) {
    return await this.CalendrierRepository.findOne(id);
  }

  async update(id: number, updateCalendrierDto: UpdateCalendrierDto) {
    return await this.CalendrierRepository.update(
      { id: id },
      updateCalendrierDto,
    );
  }

  async remove(id: number) {
    return await this.CalendrierRepository.delete(id);
  }
}
