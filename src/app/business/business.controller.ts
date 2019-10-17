import { Controller, Get, Param } from '@nestjs/common';
import { BusinessService } from './business.service'

@Controller('business')
export class BusinessController {
   constructor(private readonly businesses: BusinessService) { }

   @Get()
   all() {
      return this.businesses.all()
   }

   @Get(':id')
   one(@Param('id') id) {
      return this.businesses.one(id)
   }
}
