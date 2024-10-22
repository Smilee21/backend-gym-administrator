import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import { DayOfWeek } from 'src/types/days.enum';
import { TrainingSessionStatus } from 'src/types/training_session_status.enum';

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

  @IsEnum(TrainingSessionStatus)
  @IsOptional()
  status?: TrainingSessionStatus; // Nuevo campo para el estado

  @IsString()
  @IsOptional()
  dateOfClass?: string; // Nuevo campo para la fecha de la clase
}
