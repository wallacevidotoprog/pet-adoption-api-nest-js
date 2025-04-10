import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthLoginDto } from './auth.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('login')
  async singIn(
    @Body() auth: AuthLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.singin(auth, res);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('logout')
  async logOut(@Res({ passthrough: true }) res: Response) {
    return await this.service.logout(res);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() reg : CreateUserDto){
    return await this.service.register(reg);
  }
}
