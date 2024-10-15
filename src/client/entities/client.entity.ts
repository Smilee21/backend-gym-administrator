import { Entity, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { BaseEntity } from '../../config/base.entity';
import { IClient } from '../../interfaces/client.interface';
import { Subscriptions } from 'src/subscriptions/entities/subscriptions.entity';

@Entity()
export class Client extends BaseEntity implements IClient {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  contactInfo: string;

  @OneToMany(() => Booking, (booking) => booking.client)
  bookings: Booking[];

  @OneToOne(() => Subscriptions, (subscription) => subscription.client)
  @JoinColumn()
  subscription: Subscriptions;
}
