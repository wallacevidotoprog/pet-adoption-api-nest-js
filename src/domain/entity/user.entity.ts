import { Optional } from '@nestjs/common';
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator';
import { BaseEntity } from './base.entity';

export class UserEntity extends BaseEntity {
  @IsString()
  @MaxLength(50)
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @MaxLength(11)
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
