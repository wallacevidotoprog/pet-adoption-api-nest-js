import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AddressController],
  providers: [AddressService, AuthGuard],
  imports:[AuthModule]
})
export class AddressModule {}
