import { IsOptional, IsUUID } from 'class-validator';

export abstract class BaseEntity {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsOptional()
  createAt: Date;

  @IsOptional()
  updateAt: Date;
}
