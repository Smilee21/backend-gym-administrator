import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService) {}

  @Post()
  create(@Body() trainer: CreateTrainerDto) {
    return this.trainersService.create(trainer);
  }

  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainerDto: UpdateTrainerDto) {
    return this.trainersService.update(+id, updateTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.delete(+id);
  }
}
