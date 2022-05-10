import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RouletteService } from "./roulette.service";

@ApiTags('Roulettes')
@Controller('Roulettes')
export class RouletteController {
    constructor(private readonly rouletteService:RouletteService) {};

    @Post('create')
    async create(){}
};