import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PetController],
  providers: [PetService, AuthGuard],
   imports:[AuthModule]
})
export class PetModule {}
