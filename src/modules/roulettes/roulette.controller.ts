import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { RouletteCreateDto } from "./dto/roulette/create-roulette.dto";
import { RouletteCreateOutput } from "./output/roulette/create-roulette-output";
import { RouletteService } from "./roulette.service";

@ApiTags('Roulettes')
@Controller('Roulettes')
export class RouletteController {
    constructor(private readonly rouletteService:RouletteService) {};

    @Post('create')
    @ApiOkResponse({type: RouletteCreateOutput})
    async create(
        @Body() data:RouletteCreateDto
    ){
        const roulette = await this.rouletteService.create(data);
        return plainToClass(RouletteCreateOutput, roulette, {excludeExtraneousValues:true});
    };
};