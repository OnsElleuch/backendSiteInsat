import { Test, TestingModule } from '@nestjs/testing';
import { BrevetService } from './brevet.service';

describe('BrevetService', () => {
  let service: BrevetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrevetService],
    }).compile();

    service = module.get<BrevetService>(BrevetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
