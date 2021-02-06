import { Test, TestingModule } from '@nestjs/testing';
import { BrevetController } from './brevet.controller';

describe('BrevetController', () => {
  let controller: BrevetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrevetController],
    }).compile();

    controller = module.get<BrevetController>(BrevetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
