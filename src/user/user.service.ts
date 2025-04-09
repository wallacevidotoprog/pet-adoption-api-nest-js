import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { UserEntity } from 'src/domain/entity/user.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService extends BaseService<
  UserEntity,
  typeof PrismaService.prototype.user
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }

  protected async create(data: UserEntity) {
    if (await this.prisma.user.findFirst({ where: { email: data.email } })) {
      throw new ConflictException('Email not valite');
    }
    data.password = hashSync(data.password, 10);

    await this.prisma.user.create({ data: data });

    return HttpStatus.CREATED;
  }

  protected override async findOne(id: string): Promise<UserEntity> {
    const safe = await super.findOne(id);
    if (!safe) {
      throw new NotFoundException('Registration from id not found');
    }
    safe.password = 'NOT VIEW';

    return safe as UserEntity;
  }

  async getUserAuth(email :string):Promise<UserEntity>{
    const result = await this.prisma.user.findFirst({where:{email:email}})
    if (!result) {
      throw new NotFoundException('Registration from id not found');
    }
    return result as UserEntity;
  }
}
