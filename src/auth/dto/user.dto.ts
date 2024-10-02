import { IsString, MinLength, IsEmail } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(8)
  password: string;
}
