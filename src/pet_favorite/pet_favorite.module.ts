import { Module } from '@nestjs/common';
import { PetFavoriteService } from './pet_favorite.service';
import { PetFavoriteController } from './pet_favorite.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PetFavoriteController],
  providers: [PetFavoriteService, AuthGuard],
   imports:[AuthModule]
})
export class PetFavoriteModule {}
