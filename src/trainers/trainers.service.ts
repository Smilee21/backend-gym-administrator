import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer) private trainerRepository: Repository<Trainer>,
  ) {}

  create(trainer: CreateTrainerDto) {
    const newTrainer = this.trainerRepository.create(trainer);
    return this.trainerRepository.save(newTrainer);
  }

  findAll() {
    return this.trainerRepository.find({
      relations: ['sessions'],
    });
  }

  findOne(id: number) {
    return this.trainerRepository.find({
      where: {
        id,
      },
      relations: ['sessions'],
    });
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return this.trainerRepository.update({ id }, updateTrainerDto);
  }

  delete(id: number) {
    return this.trainerRepository.delete({ id });
  }
}
