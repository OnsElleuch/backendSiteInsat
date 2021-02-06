import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoireRechercheEntity } from './entities/laboratoire-recherche.entity';
import { LaboratoireRechercheDto } from './dto/Laboratoire-recherche';

@Injectable()
export class LaboratoireRechercheService {
  constructor(
    @InjectRepository(LaboratoireRechercheEntity)
    private readonly laboratoireRechercheRepository: Repository<LaboratoireRechercheEntity>,
  ) {}

  async create(laboratoireRechercheDto: LaboratoireRechercheDto) {
    return await this.laboratoireRechercheRepository.save(
      laboratoireRechercheDto,
    );
  }

  async findAll() {
    return await this.laboratoireRechercheRepository.find();
  }

  async findOne(id: number) {
    return await this.laboratoireRechercheRepository.findOne(id);
  }

  async update(id: number, laboratoireRechercheDto: LaboratoireRechercheDto) {
    return await this.laboratoireRechercheRepository.update(
      { id: id },
      laboratoireRechercheDto,
    );
  }

  async remove(id: number) {
    return await this.laboratoireRechercheRepository.delete(id);
  }
}
