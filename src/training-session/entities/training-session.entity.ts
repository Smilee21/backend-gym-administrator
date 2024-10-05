import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Trainer } from '../../trainers/entities/trainer.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { BaseEntity } from '../../config/base.entity';
import { ITrainingSession } from '../../interfaces/training-session.interface';
import { DayOfWeek } from '../../types/days.enum';

@Entity()
export class TrainingSession extends BaseEntity implements ITrainingSession {
  @ManyToOne(() => Trainer, (trainer) => trainer.sessions)
  @Column()
  trainerId: number;

  @Column({
    type: 'enum',
    enum: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  })
  day: DayOfWeek;

  @Column({ type: 'time' })
  hour: string;

  @Column({ type: 'int' })
  spaces: number;

  @Column({ type: 'time' })
  duration: string;

  @OneToMany(() => Booking, (booking) => booking.session)
  bookings: Booking[];
}
