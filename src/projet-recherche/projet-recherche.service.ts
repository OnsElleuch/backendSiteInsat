import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendrier } from '../calendrier/entities/calendrier.entity';
import { Repository } from 'typeorm';
import { CreateCalendrierDto } from '../calendrier/dto/create-calendrier.dto';
import { UpdateCalendrierDto } from '../calendrier/dto/update-calendrier.dto';
import { ProjetRechercheEntity } from './entities/projet-recherche.entity';
import { ProjetRechercheDto } from './dto/projet-recherche.dto';

@Injectable()
export class ProjetRechercheService {
  constructor(
    @InjectRepository(ProjetRechercheEntity)
    private readonly projetRechercheRepository: Repository<ProjetRechercheEntity>,
  ) {}
  async create(projetRechercheDto: ProjetRechercheDto) {
    return await this.projetRechercheRepository.save(projetRechercheDto);
  }

  async findAll() {
    return await this.projetRechercheRepository.find();
  }

  async findOne(id: number) {
    return await this.projetRechercheRepository.findOne(id);
  }

  async update(id: number, projetRechercheDto: ProjetRechercheDto) {
    return await this.projetRechercheRepository.update(
      { id: id },
      projetRechercheDto,
    );
  }

  async remove(id: number) {
    return await this.projetRechercheRepository.delete(id);
  }
}
