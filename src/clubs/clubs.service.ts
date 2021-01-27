import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubEntity } from './entities/club.entity';





@Injectable()

export class ClubsService {
    
    constructor(
        @InjectRepository(ClubEntity)
        private readonly ClubsRepository:  Repository<ClubEntity>
    ){}
    async getClubs(): Promise<ClubEntity[]> {
        return await this.ClubsRepository.find();
    }
    async getClubById(id : number) {
        return await this.ClubsRepository.find({id : id});
    }
    
}