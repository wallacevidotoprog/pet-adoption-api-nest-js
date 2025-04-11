import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AddressModule } from './address/address.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { EventEmitterModule, OnEvent } from '@nestjs/event-emitter';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PrismaModule,
    AuthModule,
    AddressModule,
    EventEmitterModule.forRoot(),
    PetModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {
  @OnEvent('auth.login')
  teste(data:any){
    console.log('@OnEvent(auth.login)=>',data);
    
  }
}
