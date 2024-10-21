import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainingSessionService } from './training-session.service';
import { TrainingSessionController } from './training-session.controller';
import { TrainingSession } from './entities/training-session.entity';
import { Trainer } from 'src/trainers/entities/trainer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingSession, Trainer])],
  controllers: [TrainingSessionController],
  providers: [TrainingSessionService],
  exports: [TrainingSessionService],
})
export class TrainingSessionModule {}
