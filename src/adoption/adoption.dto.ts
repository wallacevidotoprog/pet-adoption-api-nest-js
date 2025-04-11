import { PartialType } from '@nestjs/mapped-types';
import { AdoptionEntity } from 'src/domain/entity/adoption.entity';

export class CreateAdoptionDto extends AdoptionEntity {}
export class UpdateAdoptionDto extends PartialType(CreateAdoptionDto) {}
export class FindWhereAdoptionDto extends PartialType(AdoptionEntity) {}
