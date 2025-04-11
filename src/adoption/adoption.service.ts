import { Injectable } from '@nestjs/common';
import { AdoptionEntity } from 'src/domain/entity/adoption.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdoptionService extends BaseService<
  AdoptionEntity,
  typeof PrismaService.prototype.adoption
> {
  constructor(private readonly service: PrismaService) {
    super(service.adoption);
  }
}
