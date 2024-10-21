import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
export class InscribeInSessionDto {
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  sessionId: number;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
