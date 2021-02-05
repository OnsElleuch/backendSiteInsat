import { Test, TestingModule } from '@nestjs/testing';
import { ArticleScientifiqueService } from './article-scientifique.service';

describe('ArticleScientifiqueService', () => {
  let service: ArticleScientifiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleScientifiqueService],
    }).compile();

    service = module.get<ArticleScientifiqueService>(
      ArticleScientifiqueService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
