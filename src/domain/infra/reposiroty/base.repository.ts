import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

//@ApiTags('Base')
export abstract class BaseController<CreateDto, UpdateDto, FindWhere> {
  constructor(private readonly service: any) {}
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async create(@Body() createdto: CreateDto) {
    return this.service.create(createdto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  protected async update(
    @Param('id') id: string,
    @Body() updatedto: UpdateDto,
  ) {
    return this.service.update(id, updatedto);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  protected async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  protected async findAll(@Query() data: FindWhere) {
    return this.service.findAll(data);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  protected async delete(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

export abstract class BaseService<TModel, TDelegate> {
  constructor(protected readonly model: TDelegate) {}

  protected async create(data: any) {
    return await (this.model as any).create({ data });
  }

  protected async update(id: string, data: any) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException('Registration from id not found');
    }

    await (this.model as any).update({ where: { id }, data });

    return;
  }

  protected async findOne(id: string): Promise<TModel> {
    return await (this.model as any).findFirst({ where: { id: id } });
  }

  protected async findAll(data: any): Promise<TModel[]> {
    const where = this.buildPrismaWhere(data);

    if (data) {
      return await (this.model as any).findMany({ where });
    }
    return await (this.model as any).findMany();
  }

  protected async remove(id: string) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException('Registration from id not found');
    }
    await (this.model as any).delete({ where: { id } });
    return;
  }

  private buildPrismaWhere<T extends Record<string, any>>(dto: T) {
    const where = {} as PrismaFilter<T>;

    for (const key in dto) {
      const value = dto[key];

      if (value === undefined || value === null) continue;

      if (typeof value === 'string') {
        where[key] = {
          contains: value,
        } as any;
      } else {
        where[key] = value;
      }
    }

    return where;
  }
}
type PrismaFilter<T> = {
  [K in keyof T]?: T[K] extends string
    ? { contains: string; mode?: 'insensitive' }
    : T[K];
};
