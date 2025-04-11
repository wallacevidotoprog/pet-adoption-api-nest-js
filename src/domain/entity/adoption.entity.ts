import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseEntity } from './base.entity';
import { RequestStatusAdoption } from '@prisma/client';

export class AdoptionEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  pet_id: string;

  @IsString()
  @IsNotEmpty()
  adopter_id: string;

  @IsString()
  @IsNotEmpty()
  donor_id: string;

  @IsEnum(RequestStatusAdoption)
  @IsOptional()
  status: string;

  @IsOptional()
  @IsString()
  message?: string;
}
