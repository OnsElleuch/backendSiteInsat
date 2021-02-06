import { Test, TestingModule } from '@nestjs/testing';
import { ProjetRechercheController } from './projet-recherche.controller';

describe('ProjetRechercheController', () => {
  let controller: ProjetRechercheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetRechercheController],
    }).compile();

    controller = module.get<ProjetRechercheController>(
      ProjetRechercheController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
