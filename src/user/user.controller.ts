import { Controller, Get, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController extends BaseController<
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @UseGuards(AuthGuard)
  @Get()
  protected findAll(): Promise<any> {
    return super.findAll();
  }
}
