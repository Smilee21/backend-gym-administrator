import { Injectable } from '@nestjs/common';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { UpdateTrainingSessionDto } from './dto/update-training-session.dto';

@Injectable()
export class TrainingSessionService {
  create(createTrainingSessionDto: CreateTrainingSessionDto) {
    return 'This action adds a new trainingSession';
  }

  findAll() {
    return `This action returns all trainingSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingSession`;
  }

  update(id: number, updateTrainingSessionDto: UpdateTrainingSessionDto) {
    return `This action updates a #${id} trainingSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingSession`;
  }
}
