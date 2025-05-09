import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/common/decorators/public.decorator';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import { CreatePetDto, FindWherePet, UpdatePetDto } from './pet.dto';
import { PetService } from './pet.service';

@UseGuards(AuthGuard)
@Controller('pet')
export class PetController extends BaseController<
  CreatePetDto,
  UpdatePetDto,
  FindWherePet
> {
  constructor(private readonly petService: PetService) {
    super(petService);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Get('public')
  protected async findAll(@Query() data: FindWherePet) {
    return this.petService.findAllPublic(data);
  }
}
