import { Module } from '@nestjs/common';
import { CyclingService } from './cycling.service';
import { CyclingController } from './cycling.controller';

@Module({
  controllers: [CyclingController],
  providers: [CyclingService],
})
export class CyclingModule {}
