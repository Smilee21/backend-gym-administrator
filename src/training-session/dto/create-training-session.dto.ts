import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { DayOfWeek } from 'src/types/days.enum';
import { TrainingSessionStatus } from 'src/types/training_session_status.enum';

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
  hour: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  spaces: number;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsEnum(TrainingSessionStatus)
  @IsOptional()
  status: TrainingSessionStatus;

  @IsString()
  @IsNotEmpty()
  dateOfClass: string;

  @IsOptional()
  trainer?: Trainer;
}
