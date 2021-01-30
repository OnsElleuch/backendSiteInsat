import { Test, TestingModule } from '@nestjs/testing';
import { NouveautesController } from './nouveautes.controller';

describe('NouveautesController', () => {
  let controller: NouveautesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NouveautesController],
    }).compile();

    controller = module.get<NouveautesController>(NouveautesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
