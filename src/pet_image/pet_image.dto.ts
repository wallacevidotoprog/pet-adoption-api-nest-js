import { PartialType } from '@nestjs/mapped-types';
import { PetImageEntity } from './../domain/entity/pet.entity';
export class CreatePetImageDto extends PetImageEntity {}
export class UpdatePetImageDto extends PartialType(CreatePetImageDto) {}
export class FindWherePetImageDto extends PartialType(PetImageEntity) {}
