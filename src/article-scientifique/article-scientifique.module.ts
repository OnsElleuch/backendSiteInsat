import { Module } from '@nestjs/common';
import { ArticleScientifiqueService } from './article-scientifique.service';
import { ArticleScientifiqueController } from './article-scientifique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleScientifiqueEntity } from './entities/article-scientifique.entity';

@Module({
  providers: [ArticleScientifiqueService],
  controllers: [ArticleScientifiqueController],
  imports: [TypeOrmModule.forFeature([ArticleScientifiqueEntity])],
})
export class ArticleScientifiqueModule {}
