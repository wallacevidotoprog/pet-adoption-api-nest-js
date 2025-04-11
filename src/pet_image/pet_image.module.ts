import { Module } from '@nestjs/common';
import { PetImageService } from './pet_image.service';
import { PetImageController } from './pet_image.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PetImageController],
  providers: [PetImageService, AuthGuard],
   imports:[AuthModule]
})
export class PetImageModule {}
