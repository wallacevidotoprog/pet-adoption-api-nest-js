import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import {
  CreateAdoptionDto,
  FindWhereAdoptionDto,
  UpdateAdoptionDto,
} from './adoption.dto';
import { AdoptionService } from './adoption.service';

@UseGuards(AuthGuard)
@Controller('adoption')
export class AdoptionController extends BaseController<
  CreateAdoptionDto,
  UpdateAdoptionDto,
  FindWhereAdoptionDto
> {
  constructor(private readonly adoptionService: AdoptionService) {
    super(adoptionService);
  }
}
