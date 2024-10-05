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
    console.log(trainer.name);
    console.log('HOLA');
    const newTrainer = this.trainerRepository.create(trainer);
    return this.trainerRepository.save(newTrainer);
  }

  findAll() {
    return this.trainerRepository.find();
  }

  findOne(id: number) {
    return this.trainerRepository.findBy({ id });
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return `This action updates a #${id} trainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainer`;
  }
}
