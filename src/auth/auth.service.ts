import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthLoginDto } from './auth.dto';
import { UserEntity } from 'src/domain/entity/user.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly eventEmitter:EventEmitter2
  ) {}

  async singin(auth: AuthLoginDto, res: Response) {

    const result = await this.userService.getUserAuth(auth.email);

    
    if (!result || !compareSync(auth.password, result.password)) {
      throw new UnauthorizedException();
    }   

    const payload = {
      sub: result.id,
      email: result.email,
      active: result.active
    };
    const token = await this.jwtService.signAsync(payload);
    res.cookie('Authorization', token, {
      httpOnly: true,
      maxAge: 4 * 60 * 60 * 1000,
      sameSite: 'lax',
    });

    this.eventEmitter.emit('auth.login','cu de anu')
    return;
  }

  async logout(res: Response<any, Record<string, any>>) {
    res.clearCookie('Authorization', {
      httpOnly: true,
      maxAge: 4 * 60 * 60 * 1000,
      sameSite: 'lax',
    });
    return;
  }

  async register(reg: CreateUserDto) {
    return await this.userService.register(reg);
  }
}
