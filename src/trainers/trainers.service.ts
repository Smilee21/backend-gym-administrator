import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async create(trainer: CreateTrainerDto) {
    const newTrainer = this.trainerRepository.create(trainer);
    const result = this.trainerRepository.save(newTrainer);

    if (!result) throw new BadRequestException();

    return result;
  }

  async findAll() {
    const result = await this.trainerRepository.find({
      relations: ['sessions'],
    });
    if (!result) throw new NotFoundException();

    return result;
  }

  findOne(id: number) {
    return this.trainerRepository.find({
      where: {
        id,
      },
      relations: ['sessions'],
    });
  }

  async update(id: number, updateTrainerDto: UpdateTrainerDto) {
    const result = await this.trainerRepository.update(
      { id },
      updateTrainerDto,
    );
    if (!result) throw new BadRequestException();
    return result;
  }

  delete(id: number) {
    return this.trainerRepository.delete({ id });
  }
}
