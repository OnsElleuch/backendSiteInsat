import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoireRechercheService } from './laboratoire-recherche.service';

describe('LaboratoireRechercheService', () => {
  let service: LaboratoireRechercheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoireRechercheService],
    }).compile();

    service = module.get<LaboratoireRechercheService>(
      LaboratoireRechercheService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
