import { Injectable } from '@nestjs/common';
import { PetEntity } from 'src/domain/entity/pet.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService extends BaseService<
  PetEntity,
  typeof PrismaService.prototype.pet_profile
> {
  constructor(private readonly service: PrismaService) {
    super(service.pet_profile);
  }
}
