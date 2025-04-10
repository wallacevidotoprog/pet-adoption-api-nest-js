import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { UserEntity } from 'src/domain/entity/user.entity';
import { BaseService } from 'src/domain/infra/reposiroty/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, FindWhereUser } from './user.dto';

@Injectable()
export class UserService extends BaseService<
  UserEntity,
  typeof PrismaService.prototype.user
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }

  protected async create(data: CreateUserDto) {
    if (await this.prisma.user.findFirst({ where: { email: data.email } })) {
      throw new ConflictException('Email not valite');
    }
    data.password = hashSync(data.password, 10);

    await this.prisma.user.create({ data: data });

    return;
  }

  protected override async findOne(id: string): Promise<UserEntity> {
    const safe = await super.findOne(id);
    if (!safe) {
      throw new NotFoundException('Registration from id not found');
    }
    safe.password = 'NOT VIEW';

    return safe as UserEntity;
  }

  protected override async findAll(
    where: FindWhereUser,
  ): Promise<UserEntity[]> {
    const safe = await super.findAll(where);
    if (!safe || safe.length === 0) {
      throw new NotFoundException('Registration from id not found');
    }

    const result: UserEntity[] = safe.map((r) => ({
      ...r,
      password: 'NOT VIEW',
    }));

    return result as UserEntity[];
  }

  async getUserAuth(email: string): Promise<UserEntity> {
    const result = await this.prisma.user.findFirst({
      where: { email: email },
    });
    if (!result) {
      throw new NotFoundException('Registration from id not found');
    }
    return result as UserEntity;
  }
  async register(data: CreateUserDto) {
    await this.create(data);
  }
}
