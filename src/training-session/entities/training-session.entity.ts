import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Trainer } from '../../trainers/entities/trainer.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { BaseEntity } from '../../config/base.entity';
import { ITrainingSession } from '../../interfaces/training-session.interface';
import { DayOfWeek } from '../../types/days.enum';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';
import { TrainingSessionStatus } from '../../types/training_session_status.enum';

@Entity()
export class TrainingSession extends BaseEntity implements ITrainingSession {
  @ManyToOne(() => Trainer, (trainer) => trainer.sessions)
  @JoinColumn({ name: 'trainer_id' })
  trainer: Trainer;

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
  @IsInt()
  @Type(() => Number)
  spaces: number;

  @Column({ type: 'time' })
  duration: string;

  @Column({ type: 'date' })
  @IsNotEmpty()
  dateOfClass: Date;

  @Column({
    type: 'enum',
    enum: ['Active', 'Completed', 'Cancelled'],
    default: 'Active',
  })
  status: TrainingSessionStatus;

  @OneToMany(() => Booking, (booking) => booking.session)
  bookings: Booking[];
}
