import { Trainer } from 'src/trainers/entities/trainer.entity';
import { DayOfWeek } from 'src/types/days.enum';

export interface ITrainingSession {
  id: number;
  trainer: Trainer;
  day: DayOfWeek;
  hour: string; // Format: 'HH:MM:SS'
  spaces: number;
  duration: string; // Format: 'HH:MM:SS'
}
