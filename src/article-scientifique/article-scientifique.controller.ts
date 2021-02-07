import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ArticleScientifiqueService } from './article-scientifique.service';
import { ArticleScientifiqueEntity } from './entities/article-scientifique.entity';

@ApiTags('article')
@Controller('article')

export class ArticleScientifiqueController {
  constructor(
    private readonly articleScientifiqueService: ArticleScientifiqueService,
  ) {}

  @Post()
  create(@Body() article: ArticleScientifiqueEntity) {
    return this.articleScientifiqueService.create(article);
  }

  @Get('getArticles')
  findAll() {
    return this.articleScientifiqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleScientifiqueService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() article: ArticleScientifiqueEntity) {
    return this.articleScientifiqueService.update(+id, article);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleScientifiqueService.remove(+id);
  }
}
