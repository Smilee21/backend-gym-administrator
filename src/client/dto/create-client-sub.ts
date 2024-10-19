import { IsNotEmpty, IsString } from 'class-validator';
import { PlanType } from 'src/types/plan_type.enum';

export class CreateClientWithSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  family_name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  plan_type: PlanType; // Cambiar según sea necesario
}
