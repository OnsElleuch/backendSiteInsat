import { Test, TestingModule } from '@nestjs/testing';
import { NouveautesService } from './nouveautes.service';

describe('NouveautesService', () => {
  let service: NouveautesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NouveautesService],
    }).compile();

    service = module.get<NouveautesService>(NouveautesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
