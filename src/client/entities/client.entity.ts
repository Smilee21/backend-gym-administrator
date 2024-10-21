import { Entity, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { BaseEntity } from '../../config/base.entity';
import { IClient } from '../../interfaces/client.interface';
import { Subscriptions } from '../../subscriptions/entities/subscriptions.entity';

@Entity()
export class Client extends BaseEntity implements IClient {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  family_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @OneToMany(() => Booking, (booking) => booking.client)
  bookings: Booking[];

  @OneToOne(() => Subscriptions, (subscription) => subscription.client)
  @JoinColumn()
  subscription: Subscriptions;
}
