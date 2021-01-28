import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubEntity } from './entities/club.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly ClubsRepository: Repository<ClubEntity>,
  ) {}
  async getClubs(): Promise<ClubEntity[]> {
    return await this.ClubsRepository.find();
  }
  async getClubById(id: number) {
    return await this.ClubsRepository.find({ id: id });
  }
  async updateClub(id: number, updateClubDto: UpdateClubDto) {
    return await this.ClubsRepository.update({ id: id }, updateClubDto);
  }

  async removeClub(id: number) {
    return await this.ClubsRepository.delete(id);
  }
  async createClub(createClubDto: CreateClubDto) {
    return await this.ClubsRepository.save(createClubDto);
  }
}
