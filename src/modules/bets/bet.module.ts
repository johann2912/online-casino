import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/database/pg/pg-data.module";
import { RedisModule } from "src/frameworks/database/redis/redis.module";
import { BetController } from "./bet.controller";
import { BetService } from "./bet.service";

@Module({
    imports: [PgDatabaseModule, ExceptionsModule, RedisModule],
    controllers: [BetController],
    providers: [BetService],
    exports: [BetService],
})
export class BetModule {};