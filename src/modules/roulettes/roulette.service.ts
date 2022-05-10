import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { IRouletteCreate } from "./interfaces/roulette/create-roulette.interface";

@Injectable()
export class RouletteService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async create(data:IRouletteCreate){
        return await this.databaseService.roulettes.create(data);
    };
};