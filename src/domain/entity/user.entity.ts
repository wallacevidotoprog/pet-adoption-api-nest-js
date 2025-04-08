import { IsEmail, IsInt, IsString } from 'class-validator';
import { BaseEntity } from './base.entity';

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
  address_id: string;
}
