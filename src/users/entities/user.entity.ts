import { IUser } from 'src/interfaces/user.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

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
