import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './entities/event.entity';





@Injectable()

export class EvenmentsService {
    
    constructor(
        @InjectRepository(EventEntity)
        private readonly EventsRepository:  Repository<EventEntity>
    ){}
    async getEvents(): Promise<EventEntity[]> {
        return await this.EventsRepository.find();
    }
    async getEventById(id : number) {
        return await this.EventsRepository.find({id : id});
    }
    
}