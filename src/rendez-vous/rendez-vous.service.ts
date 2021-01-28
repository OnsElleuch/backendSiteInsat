import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendezVousEntity } from './entities/rendez-vous.entity';

@Injectable()
export class RendezVousService {
  constructor(
    @InjectRepository(RendezVousEntity)
    private readonly RendezVousRepository: Repository<RendezVousEntity>,
  ) {}
  async getLatestRendezVous(): Promise<RendezVousEntity[]> {
    return await (await this.RendezVousRepository.find()).sort((a, b) =>
      this.compareDate(a, b),
    );
  }
  compareDate(a: RendezVousEntity, b: RendezVousEntity) {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    else return 0;
  }
}
