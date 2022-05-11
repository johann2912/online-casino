import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/database/pg/pg-data.module";
import { BetController } from "./bet.controller";
import { BetService } from "./bet.service";

@Module({
    imports: [PgDatabaseModule, ExceptionsModule],
    controllers: [BetController],
    providers: [BetService],
    exports: [BetService],
})
export class BetModule {};