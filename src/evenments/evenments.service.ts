import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class EvenmentsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly EventsRepository: Repository<EventEntity>,
  ) {}
  async getEvents(): Promise<EventEntity[]> {
    return await this.EventsRepository.find();
  }
  async getEventsPaginate(
    options: IPaginationOptions,
  ): Promise<Pagination<EventEntity>> {
    return paginate<EventEntity>(this.EventsRepository, options);
  }
  async getEventsById(id: number) {
    return await this.EventsRepository.findOne({ id: id });
  }
  async getEventsByClub(club: string): Promise<EventEntity[]> {
    return await this.EventsRepository.find({ club: club });
  }
  async updateEvent(id: number, updateEventDto: UpdateEventDto) {
    return await this.EventsRepository.update({ id: id }, updateEventDto);
  }

  async removeEvent(id: number) {
    return await this.EventsRepository.delete(id);
  }
  async createEvent(createEventDto: CreateEventDto) {
    return await this.EventsRepository.save(createEventDto);
  }
}
