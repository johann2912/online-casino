import { Body, Controller, Post, Session, UseGuards } from "@nestjs/common";
import { ApiBasicAuth, ApiBearerAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { AccessGuard } from "src/lib/guards/access.guard";
import { IAccess } from "src/lib/jwt/interfaces/access";
import { BetService } from "./bet.service";
import { BetCreateDto } from "./dto/create-bet.dto";
import { BetCreateOutput } from "./output/create-bet-output";

@ApiTags('Bets')
@Controller('Bets')
export class BetController {
    constructor(private readonly betService:BetService){};

    @Post('create')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type:BetCreateOutput})
    async create(
        @Session() session:IAccess,
        @Body() data:BetCreateDto,
    ){
        const login = await this.betService.create(session.id, data.roulette_id, data);
        return plainToClass(BetCreateOutput, login, {excludeExtraneousValues:true});
    };
};