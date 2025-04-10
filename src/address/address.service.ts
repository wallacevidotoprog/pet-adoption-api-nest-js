import { Injectable } from '@nestjs/common';
import { AddressEntity } from 'src/domain/entity/address.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService extends BaseService<
  AddressEntity,
  typeof PrismaService.prototype.address
> {
  constructor(private readonly prisma: PrismaService) {
      super(prisma.address);
  }
  
}
