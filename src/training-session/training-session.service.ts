import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findAll() {
    const result = await this.trainingSessionRepository.find({
      relations: ['trainer'],
    });

    if (!result) throw new NotFoundException('No Data');
    return result;
  }

  findOne(id: number) {
    return this.trainingSessionRepository.findOne({
      where: {
        id,
      },
      relations: ['trainer'],
    });
  }

  async update(id: number, updateTrainingSessionDto: UpdateTrainingSessionDto) {
    let trainingSession;
    const { day, hour, duration, trainerId, spaces, dateOfClass } =
      updateTrainingSessionDto;
    const trainer = await this.trainerRepository.findOneBy({
      id: trainerId === null || trainerId === undefined ? IsNull() : trainerId,
    });

    if (!trainer) {
      trainingSession = this.trainingSessionRepository.create({
        day,
        hour,
        spaces,
        duration,
        dateOfClass,
      });
    }

    trainingSession = this.trainingSessionRepository.create({
      trainer,
      day,
      hour,
      spaces,
      duration,
      dateOfClass,
    });

    const result = await this.trainingSessionRepository.update(
      id,
      trainingSession,
    );
    if (!result) throw new BadRequestException();

    return result;
  }

  async delete(id: number) {
    const result = await this.trainingSessionRepository.delete({ id });

    if (!result) throw new BadRequestException();

    return result;
  }

  async createTrainingSession(
    newTrainingSession: CreateTrainingSessionDto,
  ): Promise<TrainingSession> {
    let trainingSession;
    const { day, hour, duration, trainerId, spaces, dateOfClass } =
      newTrainingSession;
    const trainer = await this.trainerRepository.findOneBy({
      id: trainerId === null || trainerId === undefined ? IsNull() : trainerId,
    });

    if (!trainer) {
      trainingSession = this.trainingSessionRepository.create({
        day,
        hour,
        spaces,
        duration,
        dateOfClass,
      });
    }

    trainingSession = this.trainingSessionRepository.create({
      trainer,
      day,
      hour,
      spaces,
      duration,
      dateOfClass,
    });

    return this.trainingSessionRepository.save(trainingSession);
  }
}
