import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSessionService } from './training-session.service';

describe('TrainingSessionService', () => {
  let service: TrainingSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingSessionService],
    }).compile();

    service = module.get<TrainingSessionService>(TrainingSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
