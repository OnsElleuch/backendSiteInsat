import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from './entities/news.entity';



@Injectable()

export class NouveautesService {
    
    constructor(
        @InjectRepository(NewsEntity)
        private readonly NewsRepository:  Repository<NewsEntity>
    ){}
    async getNews(): Promise<NewsEntity[]> {
        return await this.NewsRepository.find();
    }
    async getNewsById(id : number) {
        return await this.NewsRepository.find({id: id});
    }
    
}