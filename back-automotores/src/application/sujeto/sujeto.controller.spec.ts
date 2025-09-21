import { Test, TestingModule } from '@nestjs/testing';
import { SujetoController } from './sujeto.controller';

describe('SujetoController', () => {
  let controller: SujetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetoController],
    }).compile();

    controller = module.get<SujetoController>(SujetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
