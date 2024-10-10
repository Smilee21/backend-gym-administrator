import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { DayOfWeek } from 'src/types/days.enum';

export class UpdateTrainingSessionDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  trainerId?: number;
  @IsString()
  @IsOptional()
  day?: DayOfWeek;
  @IsString()
  @IsOptional()
  hour?: string; // Format: 'HH:MM:SS'
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  spaces?: number;
  @IsString()
  @IsOptional()
  duration?: string; // Format: 'HH:MM:SS'
  @IsNumber()
  @IsOptional()
  trainer?: Trainer;
}
