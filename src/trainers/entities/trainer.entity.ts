import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TrainingSession } from '../../training-session/entities/training-session.entity';
import { BaseEntity } from '../../config/base.entity';
import { ITrainer } from '../../interfaces/trainers.interface';

@Entity()
export class Trainer extends BaseEntity implements ITrainer {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  specialty: string;

  @Column({ type: 'varchar', length: 255 })
  contactInfo: string;

  @OneToMany(() => TrainingSession, (session) => session.trainerId)
  sessions: TrainingSession[];
}
