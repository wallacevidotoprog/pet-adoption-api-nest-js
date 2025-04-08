import { IsOptional, IsString } from 'class-validator';
import { BaseEntity } from './base.entity';

export class Address extends BaseEntity {
  @IsString()
  @IsOptional()
  cep: string;

  @IsString()
  place: string;

  @IsString()
  number: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  uf: string;
}
