import { Entity, Column, OneToOne } from 'typeorm';
import { Client } from '../../client/entities/client.entity';
import { BaseEntity } from '../../config/base.entity';
import { PlanStatus, PlanType } from '../../types/plan_type.enum';

@Entity()
export class Subscriptions extends BaseEntity {
  @Column({ type: 'enum', enum: ['monthly', 'quarterly', 'annual'] })
  plan_type: PlanType;

  @Column({ type: 'enum', enum: ['active', 'inactive', 'cancelled'] })
  status: PlanStatus;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @OneToOne(() => Client, (client) => client.subscription)
  client: Client;
}
