import { Test, TestingModule } from '@nestjs/testing';
import { PartenariatService } from './partenariat.service';

describe('PartenariatService', () => {
  let service: PartenariatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartenariatService],
    }).compile();

    service = module.get<PartenariatService>(PartenariatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
