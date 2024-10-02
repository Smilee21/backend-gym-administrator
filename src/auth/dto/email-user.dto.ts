import { IsEmail } from 'class-validator';

export class EmailUserDto {
  @IsEmail()
  email: string;
}
