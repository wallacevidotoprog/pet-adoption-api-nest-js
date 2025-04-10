import { Optional } from '@nestjs/common';
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseEntity } from './base.entity';

export class UserEntity extends BaseEntity {
  @IsString({})
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  phone: number;

  @IsEmail()//disableErrorMessages
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  address_id: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;
}
