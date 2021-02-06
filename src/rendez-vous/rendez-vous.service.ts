import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
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

  async createRendezVous(createRendezVousDto: CreateRendezVousDto) {
    return await this.RendezVousRepository.save(createRendezVousDto);
  }

  async getAllRendezVous(
    options: IPaginationOptions,
  ): Promise<Pagination<RendezVousEntity>> {
    return paginate<RendezVousEntity>(this.RendezVousRepository, options);
  }
  async getRendezVousById(id: number) {
    return await this.RendezVousRepository.findOne({ id: id });
  }

  async deleteRendezVousById(id: number) {
    return await this.RendezVousRepository.delete(id);
  }
}
