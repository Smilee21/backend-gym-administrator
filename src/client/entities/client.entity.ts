import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { BaseEntity } from '../../config/base.entity';
import { IClient } from '../../interfaces/client.interface';

@Entity()
export class Client extends BaseEntity implements IClient {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  contactInfo: string;

  @OneToMany(() => Booking, (booking) => booking.client)
  bookings: Booking[];
}
