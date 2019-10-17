import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
   constructor(private readonly accounts: AccountService) { }

   @Get()
   all(): {} {
      return this.accounts.all()
   }

   @Get('id/:id')
   findById(@Param('id') id) {
      return this.accounts.findById(id)
   }

   @Get('email/:email')
   findByEmail(@Param('email') email) {
      return this.accounts.findByEmail(email)
   }

   @Post()
   create(@Body() user) {
      return this.accounts.create(user)
   }
}
