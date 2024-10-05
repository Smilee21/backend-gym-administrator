import { DayOfWeek } from 'src/types/days.enum';

export interface ITrainingSession {
  id: number;
  trainerId: number;
  day: DayOfWeek;
  hour: string; // Format: 'HH:MM:SS'
  spaces: number;
  duration: string; // Format: 'HH:MM:SS'
}
