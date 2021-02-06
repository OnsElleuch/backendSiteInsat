import { Test, TestingModule } from '@nestjs/testing';
import { CommissionTheseService } from './commission-these.service';

describe('CommissionTheseService', () => {
  let service: CommissionTheseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionTheseService],
    }).compile();

    service = module.get<CommissionTheseService>(CommissionTheseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
