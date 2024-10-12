import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { DayOfWeek } from 'src/types/days.enum';

export class CreateTrainingSessionDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  trainerId?: number;
  @IsString()
  @IsNotEmpty()
  day: DayOfWeek;
  @IsString()
  @IsNotEmpty()
  hour: string; // Format: 'HH:MM:SS'
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  spaces: number;
  @IsString()
  @IsNotEmpty()
  duration: string; // Format: 'HH:MM:SS'
  @IsNumber()
  @IsOptional()
  trainer?: Trainer;
}
