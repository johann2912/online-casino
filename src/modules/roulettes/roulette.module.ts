import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/database/pg/pg-data.module";
import { RouletteController } from "./roulette.controller";
import { RouletteService } from "./roulette.service";

@Module({
    imports: [PgDatabaseModule, ExceptionsModule],
    controllers: [RouletteController],
    providers: [RouletteService],
    exports: [RouletteService]
})
export class RouletteModule {};