import { Test, TestingModule } from '@nestjs/testing';
import { AutomotorService } from './automotor.service';

describe('AutomotorService', () => {
  let service: AutomotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomotorService],
    }).compile();

    service = module.get<AutomotorService>(AutomotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
