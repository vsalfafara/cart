import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service'
import { access } from 'fs';

@Injectable()
export class AuthService {
   constructor(
      private readonly jwt: JwtService,
      private readonly accountsService: AccountService
   ) { }

   async validate(user) {
      return await this.accountsService.getUser(user)
   }

   async auth(user) {
      const validatedUser = await this.validate(user)

      if (!validatedUser)
         return { status: 404 }

      const payload = {
         id: validatedUser._id,
         username: `${validatedUser.first_name} ${validatedUser.last_name}`,
         email: validatedUser.email_address
      }

      const accessToken = this.jwt.sign(payload)

      return {
         access_token: accessToken,
         status: 200
      }
   }

   async validateToken(token) {

   }
}
