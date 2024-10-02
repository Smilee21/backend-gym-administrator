import { IsNotEmpty, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class ForgotPasswordDto extends UserDto {
  @IsNotEmpty()
  @IsString()
  confirmationCode: string;
}
