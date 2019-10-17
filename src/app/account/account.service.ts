import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '../interfaces/account.interface'

@Injectable()
export class AccountService {
   constructor(@InjectModel('account') private readonly account: Model<Account>) { }

   async all(): Promise<Account[]> {
      return await this.account.find().exec()
   }

   async findById(id): Promise<Account> {
      try {
         return await this.account.findById(id).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }

   async findByEmail(email): Promise<Account> {
      try {
         return await this.account.findOne({ 'email_address': email }).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }
   async getUser({ email_address, password }) {
      try {
         return await this.account.findOne({ 'email_address': email_address, 'password': password }).exec()
      }
      catch (error) {
         console.log(error.message)
      }
   }

   async create(user) {
      try {
         const newUser = this.account(user)
         newUser.save(function (err) {
            if (err) {
               console.log(err);
               return;
            }
         });
      }
      catch (error) {
         console.log(error.message)
      }
   }
}
