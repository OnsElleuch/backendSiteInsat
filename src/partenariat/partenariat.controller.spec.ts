import { Test, TestingModule } from '@nestjs/testing';
import { PartenariatController } from './partenariat.controller';
import { PartenariatService } from './partenariat.service';

describe('PartenariatController', () => {
  let controller: PartenariatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartenariatController],
      providers: [PartenariatService],
    }).compile();

    controller = module.get<PartenariatController>(PartenariatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
