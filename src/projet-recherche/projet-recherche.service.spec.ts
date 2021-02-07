import { Test, TestingModule } from '@nestjs/testing';
import { ProjetRechercheService } from './projet-recherche.service';

describe('ProjetRechercheService', () => {
  let service: ProjetRechercheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjetRechercheService],
    }).compile();

    service = module.get<ProjetRechercheService>(ProjetRechercheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
