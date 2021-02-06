import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleScientifiqueEntity } from './entities/article-scientifique.entity';

@Injectable()
export class ArticleScientifiqueService {
  constructor(
    @InjectRepository(ArticleScientifiqueEntity)
    private readonly articleRepository: Repository<ArticleScientifiqueEntity>,
  ) {}
  async create(article: ArticleScientifiqueEntity) {
    return await this.articleRepository.save(article);
  }

  async findAll() {
    return await this.articleRepository.find();
  }

  async findOne(id: number) {
    return await this.articleRepository.findOne(id);
  }

  async update(id: number, article: ArticleScientifiqueEntity) {
    return await this.articleRepository.update({ id: id }, article);
  }

  async remove(id: number) {
    return await this.articleRepository.delete(id);
  }
}
