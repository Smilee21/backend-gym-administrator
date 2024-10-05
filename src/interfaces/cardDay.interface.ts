import { ITrainer } from './trainers.interface';
import { IDay } from './day.interface';

export interface ICardDay {
  id: string;
  hour: Date;
  spaces: number;
  createdAt: Date;
  trainer: ITrainer;
  day: IDay;
}
