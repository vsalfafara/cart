import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Business } from '../interfaces/business.interface'

@Injectable()
export class BusinessService {
   constructor(@InjectModel('business') private readonly businesses: Model<Business>) { }

   async all(): Promise<Business[]> {
      return await this.businesses.find().exec()
   }

   async one(id): Promise<Business> {
      try {
         return await this.businesses.findById(id).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }
}
