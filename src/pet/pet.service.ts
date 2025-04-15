import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PetEntity } from 'src/domain/entity/pet.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindWherePet, FindWherePetPublic } from './pet.dto';

@Injectable()
export class PetService extends BaseService<
  PetEntity,
  typeof PrismaService.prototype.pet_profile
> {
  constructor(private readonly service: PrismaService) {
    super(service.pet_profile);
  }

  async findAllPublic(data?: FindWherePet): Promise<FindWherePetPublic[]> {
    let where: Prisma.pet_profileWhereInput = { availableForAdoption: true };

    if (data) {
      const baseWhere = this.buildPrismaWhere(data);
      Object.assign(where, baseWhere);
    }
    const result = await this.service.pet_profile.findMany({
      where,
      include: { images: true },
    });

    return result.map((pet) => ({
      id: pet.id,
      name: pet.name ?? '',
      type: pet.type ?? '',
      breed: pet.breed ?? '',
      gender: pet.gender ?? '',
      age: pet.age ?? 0,
      description: pet.description ?? '',
      images: pet.images.map((img) => img.url),
    }));
    
  }
}
