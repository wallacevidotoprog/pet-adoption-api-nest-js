import { Controller, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import {
  CreatePetImageDto,
  FindWherePetImageDto,
  UpdatePetImageDto,
} from './pet_image.dto';
import { PetImageService } from './pet_image.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('pet-image')
export class PetImageController extends BaseController<
  CreatePetImageDto,
  UpdatePetImageDto,
  FindWherePetImageDto
> {
  constructor(private readonly petImageService: PetImageService) {
    super(petImageService);
  }
}
