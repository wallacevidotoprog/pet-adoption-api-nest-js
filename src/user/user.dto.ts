import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { UserEntity } from 'src/domain/entity/user.entity';

export class LoginDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

export class CreateUserDto extends OmitType(UserEntity,['active','id','createAt','updateAt'] as const){}
export class UpdateUserDto extends PartialType(OmitType(UserEntity,['active'] as const)) {}
export class FindWhereUser extends PartialType(UserEntity) {}


