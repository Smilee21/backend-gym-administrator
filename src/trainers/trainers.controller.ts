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
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@UseGuards(RolesGuard)
@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService) {}
  @Roles('Admin')
  @Post()
  create(@Body() trainer: CreateTrainerDto) {
    return this.trainersService.create(trainer);
  }
  @Roles('Admin')
  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainersService.findAll();
  }
  @Roles('Admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainersService.findOne(+id);
  }
  @Roles('Admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainerDto: UpdateTrainerDto) {
    return this.trainersService.update(+id, updateTrainerDto);
  }
  @Roles('Admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.delete(+id);
  }
}
