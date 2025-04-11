import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
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
  @IsNotEmpty()
  user_id: string;
}

export class PetImageEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  pet_profile_id: string;
}

export class PetFavoriteEntity extends BaseEntity {
  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  pet_profile_id: string;
}
