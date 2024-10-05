import { Module } from '@nestjs/common';
import { TrainingSessionService } from './training-session.service';
import { TrainingSessionController } from './training-session.controller';

@Module({
  controllers: [TrainingSessionController],
  providers: [TrainingSessionService],
})
export class TrainingSessionModule {}
