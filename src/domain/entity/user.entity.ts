import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { BaseEntity } from './base.entity';

export class UserEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @MaxLength(11)
  phone: number;

  @IsEmail() //disableErrorMessages
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  address_id: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsString()
  @MaxLength(11)
  cpf: string;

  @IsString()
  @IsOptional()
  biography?: string;

  @IsDate()
  @IsOptional()
  data_birth?: Date;
}
