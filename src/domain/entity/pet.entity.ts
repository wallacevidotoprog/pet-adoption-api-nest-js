import { IsString, IsBoolean, IsOptional, IsInt, IsArray, IsNumber } from 'class-validator';
import { BaseEntity } from './base.entity';

export class PetEntity extends BaseEntity {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  breed: string;

  @IsString()
  size: string;

  @IsString()
  gender: string;

  @IsInt()
  age: number;

  @IsString()
  description: string;

  @IsString()
  vaccines: string;

  @IsBoolean()
  neutered: boolean;

  @IsBoolean()
  healthy: boolean;

  @IsBoolean()
  specialNeeds: boolean;

  @IsString()
  category: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsBoolean()
  availableForAdoption: boolean;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsString()
  user_id: string;
}
