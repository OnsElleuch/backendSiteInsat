import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class NouveautesService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly NewsRepository: Repository<NewsEntity>,
  ) {}
  async getNews(): Promise<NewsEntity[]> {
    return await this.NewsRepository.find();
  }
  async getNewsPaginate(
    options: IPaginationOptions,
  ): Promise<Pagination<NewsEntity>> {
    return paginate<NewsEntity>(this.NewsRepository, options);
  }
  async getNewsById(id: number) {
    return await this.NewsRepository.findOne({ id: id });
  }
  async updateNews(id: number, updateNewsDto: UpdateNewsDto) {
    return await this.NewsRepository.update({ id: id }, updateNewsDto);
  }

  async removeNews(id: number) {
    return await this.NewsRepository.delete(id);
  }
  async createNews(createNewsDto: CreateNewsDto) {
    return await this.NewsRepository.save(createNewsDto);
  }
}
