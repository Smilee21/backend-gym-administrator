import { IsNotEmpty, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class ChangePassDto extends UserDto {
  @IsNotEmpty()
  @IsString()
  accessToken: string;
}
