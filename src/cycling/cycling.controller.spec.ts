import { Test, TestingModule } from '@nestjs/testing';
import { CyclingController } from './cycling.controller';
import { CyclingService } from './cycling.service';

describe('CyclingController', () => {
  let controller: CyclingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CyclingController],
      providers: [CyclingService],
    }).compile();

    controller = module.get<CyclingController>(CyclingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
