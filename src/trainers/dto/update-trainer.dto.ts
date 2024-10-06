import { IsOptional, IsString } from 'class-validator';

export class UpdateTrainerDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  specialty?: string;
  @IsString()
  @IsOptional()
  contactInfo?: string;
}
