import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { PetEntity } from 'src/domain/entity/pet.entity';

export class CreatePetDto extends PetEntity {}
export class UpdatePetDto extends PartialType(CreatePetDto) {}
export class FindWherePet extends PartialType(PetEntity) {}

export class FindWherePetPublic extends PickType(PetEntity, ['id','name','type','breed','gender','images','description','age'] as const) {}