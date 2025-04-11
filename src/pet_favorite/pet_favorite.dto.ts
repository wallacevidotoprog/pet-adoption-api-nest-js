import { PartialType } from '@nestjs/mapped-types';
import { PetFavoriteEntity } from 'src/domain/entity/pet.entity';

export class CreatePetFavoriteDto extends PetFavoriteEntity {}
export class UpdatePetFavoriteDto extends PartialType(CreatePetFavoriteDto) {}
export class FindWherePetFavoriteDto extends PartialType(PetFavoriteEntity) {}
