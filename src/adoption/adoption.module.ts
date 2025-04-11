import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AdoptionController],
  providers: [AdoptionService, AuthGuard],
   imports:[AuthModule]
})
export class AdoptionModule {}
