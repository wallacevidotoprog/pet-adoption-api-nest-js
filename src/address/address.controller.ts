import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BaseController } from 'src/domain/infra/reposiroty/base.repository';
import { CreateAddressDto, FindWhereAddress, UpdateAddressDto } from './address.dto';
import { AddressService } from './address.service';

@UseGuards(AuthGuard)
@Controller('address')
export class AddressController extends BaseController<
  CreateAddressDto,
  UpdateAddressDto,
  FindWhereAddress
> {
  constructor(private readonly addressService: AddressService) {
    super(addressService);
  }

  @Get('teste')
  async teste(@Body() where: FindWhereAddress) {
    console.log(where);
  }
}
