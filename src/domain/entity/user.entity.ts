import { IsEmail, IsInt, IsString } from 'class-validator';
import { BaseEntity } from './base.entity';
import { Optional } from '@nestjs/common';

export class UserEntity extends BaseEntity {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsInt()
  phone: number;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @Optional()
  address_id: string;
}
