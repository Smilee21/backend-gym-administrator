import { PartialType } from '@nestjs/mapped-types';
import { CreateCyclingDto } from './create-cycling.dto';

export class UpdateCyclingDto extends PartialType(CreateCyclingDto) {}
