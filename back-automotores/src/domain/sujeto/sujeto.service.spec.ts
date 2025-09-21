import { Test, TestingModule } from '@nestjs/testing';
import { SujetoService } from './sujeto.service';

describe('SujetoService', () => {
  let service: SujetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetoService],
    }).compile();

    service = module.get<SujetoService>(SujetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
