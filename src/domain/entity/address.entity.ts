import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseEntity } from './base.entity';

export class AddressEntity extends BaseEntity {
  @IsString()
  @IsOptional()
  cep: string;

  @IsString()
  place: string;

  @IsInt()
  number: number;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  @MaxLength(2)
  uf: string;

  @IsString()
  country: string;

  @IsString()
  @IsOptional()
  complement: string;
}
