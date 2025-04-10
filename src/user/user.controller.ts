import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import { CreateUserDto, FindWhereUser, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController extends BaseController<
  CreateUserDto,
  UpdateUserDto,
  FindWhereUser
> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
