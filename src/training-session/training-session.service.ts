import { Injectable } from '@nestjs/common';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { UpdateTrainingSessionDto } from './dto/update-training-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from './entities/training-session.entity';
import { IsNull, Repository } from 'typeorm';
import { Trainer } from 'src/trainers/entities/trainer.entity';

@Injectable()
export class TrainingSessionService {
  constructor(
    @InjectRepository(TrainingSession)
    private trainingSessionRepository: Repository<TrainingSession>,
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  create(trainingSession: CreateTrainingSessionDto) {
    const newTrainingSession =
      this.trainingSessionRepository.create(trainingSession);
    return this.trainingSessionRepository.save(newTrainingSession);
  }

  findAll() {
    return this.trainingSessionRepository.find({ relations: ['trainer'] });
  }

  findOne(id: number) {
    return this.trainingSessionRepository.findOne({
      where: {
        id,
      },
      relations: ['trainer'],
    });
  }

  update(id: number, updateTrainingSessionDto: UpdateTrainingSessionDto) {
    return this.trainingSessionRepository.update(
      { id },
      updateTrainingSessionDto,
    );
  }

  delete(id: number) {
    return this.trainingSessionRepository.delete({ id });
  }

  async createTrainingSession(
    newTrainingSession: CreateTrainingSessionDto,
  ): Promise<TrainingSession> {
    const { day, hour, duration, trainerId, spaces } = newTrainingSession;

    const trainer = await this.trainerRepository.findOneBy({
      id: trainerId === null || trainerId === undefined ? IsNull() : trainerId,
    });
    console.log(trainer);

    if (!trainer) {
      throw new Error('Trainer not found');
    }

    const trainingSession = this.trainingSessionRepository.create({
      trainer,
      day,
      hour,
      spaces,
      duration,
    });

    return this.trainingSessionRepository.save(trainingSession);
  }
}
