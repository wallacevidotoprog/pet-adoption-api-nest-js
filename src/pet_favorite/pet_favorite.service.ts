import { Injectable } from '@nestjs/common';
import { PetFavoriteEntity } from 'src/domain/entity/pet.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetFavoriteService extends BaseService<
  PetFavoriteEntity,
  typeof PrismaService.prototype.pet_favorite
> {
  constructor(private readonly service: PrismaService) {
    super(service.pet_favorite);
  }
}
