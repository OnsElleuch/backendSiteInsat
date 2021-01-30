import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnseignantCommissionTheseEntity } from './entities/enseignant-commission-these.entity';

@Injectable()
export class CommissionTheseService {
  constructor(
    @InjectRepository(EnseignantCommissionTheseEntity)
    private readonly EnseignantCommissionTheseRepository: Repository<EnseignantCommissionTheseEntity>,
  ) {}
  async create(
    enseignantCommissionTheseEntity: EnseignantCommissionTheseEntity,
  ) {
    return await this.EnseignantCommissionTheseRepository.save(
      enseignantCommissionTheseEntity,
    );
  }

  async findAll() {
    return await this.EnseignantCommissionTheseRepository.find();
  }

  async findOne(email: string) {
    return await this.EnseignantCommissionTheseRepository.findOne(email);
  }

  async update(
    email: string,
    enseignantCommissionTheseEntity: EnseignantCommissionTheseEntity,
  ) {
    return await this.EnseignantCommissionTheseRepository.update(
      { email: email },
      enseignantCommissionTheseEntity,
    );
  }

  async remove(email: string) {
    return await this.EnseignantCommissionTheseRepository.delete(email);
  }
}
