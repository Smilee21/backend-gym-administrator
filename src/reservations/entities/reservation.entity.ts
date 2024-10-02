import { IReservation } from 'src/interfaces/reservation.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'reservations' })
export class ReservationEntity extends BaseEntity implements IReservation {
  @Column()
  type: string;
  @Column()
  date: Date;
}
