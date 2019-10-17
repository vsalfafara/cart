import { Module } from '@nestjs/common';
import { AccountModule } from './app/account/account.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { BusinessModule } from './app/business/business.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    AccountModule,
    DatabaseModule,
    BusinessModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env')
    },
  ],
})
export class AppModule { }
