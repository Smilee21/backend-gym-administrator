import { Test, TestingModule } from '@nestjs/testing';
import { CyclingService } from './cycling.service';

describe('CyclingService', () => {
  let service: CyclingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyclingService],
    }).compile();

    service = module.get<CyclingService>(CyclingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
