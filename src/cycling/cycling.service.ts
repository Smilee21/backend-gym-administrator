import { Injectable } from '@nestjs/common';
import { CreateCyclingDto } from './dto/create-cycling.dto';
import { UpdateCyclingDto } from './dto/update-cycling.dto';

@Injectable()
export class CyclingService {
  create(createCyclingDto: CreateCyclingDto) {
    return 'This action adds a new cycling';
  }

  findAll() {
    return `This action returns all cycling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cycling`;
  }

  update(id: number, updateCyclingDto: UpdateCyclingDto) {
    return `This action updates a #${id} cycling`;
  }

  remove(id: number) {
    return `This action removes a #${id} cycling`;
  }
}
