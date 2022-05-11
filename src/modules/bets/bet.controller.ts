import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { BetService } from "./bet.service";
import { BetCreateDto } from "./dto/create-bet.dto";
import { BetCreateOutput } from "./output/create-bet-output";

@ApiTags('Bets')
@Controller('Bets')
export class BetController {
    constructor(private readonly betService:BetService){};

    @Post('create')
    @ApiOkResponse({type:BetCreateOutput})
    async create(
        @Body() data:BetCreateDto
    ){
        const login = await this.betService.create(data);
        return plainToClass(BetCreateOutput, login, {excludeExtraneousValues:true});
    };
};