import { Injectable } from '@nestjs/common';
import { PetImageEntity } from 'src/domain/entity/pet.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetImageService extends BaseService<
  PetImageEntity,
  typeof PrismaService.prototype.pet_image
> {
  constructor(private readonly service: PrismaService) {
    super(service.pet_image);
  }
}
