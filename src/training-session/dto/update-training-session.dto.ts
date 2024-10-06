import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingSessionDto } from './create-training-session.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DayOfWeek } from 'src/types/days.enum';

export class UpdateTrainingSessionDto {
  @IsNumber()
  @IsOptional()
  trainerId?: number;
  @IsString()
  @IsOptional()
  day?: DayOfWeek;
  @IsString()
  @IsOptional()
  hour?: string; // Format: 'HH:MM:SS'
  @IsNumber()
  @IsOptional()
  spaces?: number;
  @IsString()
  @IsOptional()
  duration?: string; // Format: 'HH:MM:SS'
}
