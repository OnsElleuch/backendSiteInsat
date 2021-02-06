import { Test, TestingModule } from '@nestjs/testing';
import { CommissionTheseController } from './commission-these.controller';

describe('CommissionTheseController', () => {
  let controller: CommissionTheseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionTheseController],
    }).compile();

    controller = module.get<CommissionTheseController>(
      CommissionTheseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
