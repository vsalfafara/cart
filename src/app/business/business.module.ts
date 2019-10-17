import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from '../schemas/business.schema';

const mongoose = MongooseModule.forFeature([
  {
    name: 'business',
    schema: Schema
  }
])

@Module({
  imports: [mongoose],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule { }
