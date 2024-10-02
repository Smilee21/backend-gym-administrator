import { IUser } from 'src/interfaces/user.interface';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUser {
  @Column({ unique: true })
  email: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  role: string;
}
