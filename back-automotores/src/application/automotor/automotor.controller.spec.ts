import { Test, TestingModule } from '@nestjs/testing';
import { AutomotorController } from './automotor.controller';

describe('AutomotorController', () => {
  let controller: AutomotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomotorController],
    }).compile();

    controller = module.get<AutomotorController>(AutomotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
