import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingSessionService } from './training-session.service';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { UpdateTrainingSessionDto } from './dto/update-training-session.dto';

@Controller('training-session')
export class TrainingSessionController {
  constructor(private readonly trainingSessionService: TrainingSessionService) {}

  @Post()
  create(@Body() createTrainingSessionDto: CreateTrainingSessionDto) {
    return this.trainingSessionService.create(createTrainingSessionDto);
  }

  @Get()
  findAll() {
    return this.trainingSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingSessionDto: UpdateTrainingSessionDto) {
    return this.trainingSessionService.update(+id, updateTrainingSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingSessionService.remove(+id);
  }
}
