import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgDatabaseModule } from './frameworks/database/pg/pg-data.module';
import { RedisModule } from './frameworks/database/redis/redis.module';
import { AuthModule } from './modules/auth/auth.module';
import { RouletteModule } from './modules/roulettes/roulette.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    PgDatabaseModule,
    RouletteModule,
    RedisModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}