import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import {
  CreatePetFavoriteDto,
  FindWherePetFavoriteDto,
  UpdatePetFavoriteDto,
} from './pet_favorite.dto';
import { PetFavoriteService } from './pet_favorite.service';

@UseGuards(AuthGuard)
@Controller('pet-favorite')
export class PetFavoriteController extends BaseController<
  CreatePetFavoriteDto,
  UpdatePetFavoriteDto,
  FindWherePetFavoriteDto
> {
  constructor(private readonly petFavoriteService: PetFavoriteService) {
    super(petFavoriteService);
  }
}
