import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTrainerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  specialty: string;
  @IsString()
  @IsNotEmpty()
  contactInfo: string;
}
