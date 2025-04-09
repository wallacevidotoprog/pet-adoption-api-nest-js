import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthLoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async singIn(
    @Body() auth: AuthLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.singin(auth, res);
  }
  @Post('logout')
  async logOut(@Res({ passthrough: true }) res: Response) {
    return await this.service.logout(res);
  }
}
