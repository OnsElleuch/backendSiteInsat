import { Test, TestingModule } from '@nestjs/testing';
import { ArticleScientifiqueController } from './article-scientifique.controller';

describe('ArticleScientifiqueController', () => {
  let controller: ArticleScientifiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleScientifiqueController],
    }).compile();

    controller = module.get<ArticleScientifiqueController>(
      ArticleScientifiqueController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
