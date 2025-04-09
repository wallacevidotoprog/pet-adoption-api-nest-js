import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { UserEntity } from 'src/domain/entity/user.entity';

export class LoginDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

export class CreateUserDto extends UserEntity {}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

