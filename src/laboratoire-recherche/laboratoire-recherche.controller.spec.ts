import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoireRechercheController } from './laboratoire-recherche.controller';

describe('LaboratoireRechercheController', () => {
  let controller: LaboratoireRechercheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboratoireRechercheController],
    }).compile();

    controller = module.get<LaboratoireRechercheController>(
      LaboratoireRechercheController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
