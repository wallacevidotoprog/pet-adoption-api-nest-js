import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { AuthLoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async singin(auth: AuthLoginDto, res: Response) {
    const result = await this.userService.getUserAuth(auth.email);

    if (!result || !compareSync(auth.password, result.password)) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: result.id,
      email: result.email,
    };    
    const token = await this.jwtService.signAsync(payload);
    res.cookie('Authorization', token, {
      httpOnly: true,
      maxAge: 4 * 60 * 60 * 1000,
      sameSite: 'lax',
    });

    return HttpStatus.ACCEPTED;
  }

  async logout(res: Response<any, Record<string, any>>) {
    res.clearCookie('Authorization', {
      httpOnly: true,
      maxAge: 4 * 60 * 60 * 1000,
      sameSite: 'lax',
    });
    return HttpStatus.ACCEPTED;
  }
}
