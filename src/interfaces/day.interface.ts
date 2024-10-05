import { ICardDay } from './cardDay.interface';
import { DayOfWeek } from 'src/types/days.enum';

export interface IDay {
  id: string;
  dayName: DayOfWeek;

  cards?: ICardDay[];
}
