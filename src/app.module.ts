import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgDatabaseModule } from './frameworks/database/pg/pg-data.module';
import { RedisModule } from './frameworks/database/redis/redis.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    PgDatabaseModule,
    RedisModule,
    UserModule,
  ],
})
export class AppModule {}