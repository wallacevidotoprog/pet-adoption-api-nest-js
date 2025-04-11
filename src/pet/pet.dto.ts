import { PartialType } from '@nestjs/mapped-types';
import { PetEntity } from 'src/domain/entity/pet.entity';

export class CreatePetDto extends PetEntity {}
export class UpdatePetDto extends PartialType(CreatePetDto) {}
export class FindWherePet extends PartialType(PetEntity) {}
