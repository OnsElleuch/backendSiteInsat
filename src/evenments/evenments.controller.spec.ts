import { Test, TestingModule } from '@nestjs/testing';
import { EvenmentsController } from './evenments.controller';

describe('EvenmentsController', () => {
  let controller: EvenmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvenmentsController],
    }).compile();

    controller = module.get<EvenmentsController>(EvenmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
