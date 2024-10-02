import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ValidationDataUserDto {
  @IsString()
  @IsNotEmpty()
  code: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
