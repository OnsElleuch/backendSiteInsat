import { Test, TestingModule } from '@nestjs/testing';
import { EvenmentsService } from './evenments.service';

describe('EvenmentsService', () => {
  let service: EvenmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvenmentsService],
    }).compile();

    service = module.get<EvenmentsService>(EvenmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
