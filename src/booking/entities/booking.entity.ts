import { Entity, Column, ManyToOne } from 'typeorm';
import { TrainingSession } from '../../training-session/entities/training-session.entity';
import { Client } from '../../client/entities/client.entity';
import { BaseEntity } from '../../config/base.entity';
import { BookingTrainingSessionStatus } from '../../types/booking_training_session_status.enum';

@Entity()
export class Booking extends BaseEntity {
  @ManyToOne(() => TrainingSession, (session) => session.bookings)
  session: TrainingSession;

  @ManyToOne(() => Client, (client) => client.bookings)
  client: Client;

  @Column({
    type: 'enum',
    enum: ['Active', 'Cancelled', 'Misses', 'Attended'],
    default: 'Active',
  })
  status: BookingTrainingSessionStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  bookingTime: Date;
}
