import { PartialType } from '@nestjs/mapped-types';
import { AddressEntity } from 'src/domain/entity/address.entity';

export class CreateAddressDto extends AddressEntity {}
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
export class FindWhereAddress extends PartialType(AddressEntity) {}
