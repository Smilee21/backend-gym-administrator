import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { TrainingSession } from 'src/training-session/entities/training-session.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  controllers: [TrainersController],
  providers: [TrainersService, JwtService],
})
export class TrainersModule {}
