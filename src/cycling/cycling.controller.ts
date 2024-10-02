import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CyclingService } from './cycling.service';
import { CreateCyclingDto } from './dto/create-cycling.dto';
import { UpdateCyclingDto } from './dto/update-cycling.dto';

@Controller('cycling')
export class CyclingController {
  constructor(private readonly cyclingService: CyclingService) {}

  @Post()
  create(@Body() createCyclingDto: CreateCyclingDto) {
    return this.cyclingService.create(createCyclingDto);
  }

  @Get()
  findAll() {
    return this.cyclingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyclingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCyclingDto: UpdateCyclingDto) {
    return this.cyclingService.update(+id, updateCyclingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cyclingService.remove(+id);
  }
}
