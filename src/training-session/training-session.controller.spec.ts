import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSessionController } from './training-session.controller';
import { TrainingSessionService } from './training-session.service';

describe('TrainingSessionController', () => {
  let controller: TrainingSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSessionController],
      providers: [TrainingSessionService],
    }).compile();

    controller = module.get<TrainingSessionController>(TrainingSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
