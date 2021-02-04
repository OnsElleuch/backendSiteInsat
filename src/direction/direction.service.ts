import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DirectionEntity } from './entities/direction.entity';
import { Direction } from './models/direction';
import { ServiceEnumEnum } from './service-enum.enum';

@Injectable()
export class DirectionService {
  constructor(
    @InjectRepository(DirectionEntity)
    private readonly DirectionRepository: Repository<DirectionEntity>,
  ) {}
  async getDirectionMembers(): Promise<DirectionEntity[]> {
    return await this.DirectionRepository.find({
      service: ServiceEnumEnum.Direction,
    });
  }
  async getAdministrationMembers(): Promise<DirectionEntity[]> {
    return await this.DirectionRepository.find({
      service: ServiceEnumEnum.Administration,
    });
  }

  async addMember(member: Direction) {
    return await this.DirectionRepository.save(member);
  }
}
