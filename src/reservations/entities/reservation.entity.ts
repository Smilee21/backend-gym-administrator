import { IReservation } from 'src/interfaces/reservation.interface';
import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'reservations' })
export class ReservationEntity extends BaseEntity implements IReservation {
  @Column()
  type: string;
  @Column()
  date: Date;
  @Column()
  trainer: string;
}
