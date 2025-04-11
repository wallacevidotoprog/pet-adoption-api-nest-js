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
import { PetImageModule } from './pet_image/pet_image.module';
import { PetFavoriteModule } from './pet_favorite/pet_favorite.module';
import { AdoptionModule } from './adoption/adoption.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PrismaModule,
    AuthModule,
    AddressModule,
    EventEmitterModule.forRoot(),
    PetModule,
    PetImageModule,
    PetFavoriteModule,
    AdoptionModule
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
