import { IsEnum, IsDateString, IsNotEmpty } from 'class-validator';
import { PlanStatus, PlanType } from '../../types/plan_type.enum';

export class CreateSubscriptionDto {
  @IsEnum(PlanType)
  @IsNotEmpty()
  plan_type: PlanType;

  @IsEnum(PlanStatus)
  @IsNotEmpty()
  status: PlanStatus;

  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsDateString()
  @IsNotEmpty()
  end_date: Date;
}
