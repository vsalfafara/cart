import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccountModule } from '../account/account.module'
import { JwtModule } from '@nestjs/jwt';

const jwt = JwtModule.register({
  secret: 'secret123456789'
})

@Module({
  imports: [jwt, AccountModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
