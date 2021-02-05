import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DirectionEntity } from './entities/direction.entity';
import { Direction } from './models/direction';
import { ServiceEnumEnum } from './service-enum.enum';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class DirectionService {
  constructor(
    @InjectRepository(DirectionEntity)
    private readonly DirectionRepository: Repository<DirectionEntity>,
  ) {}
  async getDirectionMembersByService(
    service: string,
  ): Promise<DirectionEntity[]> {
    return await this.DirectionRepository.find({
      service: ServiceEnumEnum[service],
    });
  }

  async addMember(member: Direction) {
    return await this.DirectionRepository.save(member);
  }
  async getAllMembers(
    options: IPaginationOptions,
  ): Promise<Pagination<DirectionEntity>> {
    return paginate<DirectionEntity>(this.DirectionRepository, options);
  }
  async deleteMemberById(code: number) {
    return await this.DirectionRepository.delete(code);
  }
  async getMemberById(code) {
    return await this.DirectionRepository.findOne({ poste_code: code });
  }
}
