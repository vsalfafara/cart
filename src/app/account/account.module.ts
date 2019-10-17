import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../schemas/account.schema';

const mongoose = MongooseModule.forFeature([
  {
    name: 'accounts',
    schema: Schema
  }
])

@Module({
  imports: [mongoose],
  exports: [AccountService],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule { }
