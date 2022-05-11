import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BetService } from "./bet.service";

@ApiTags('Bets')
@Controller('Bets')
export class BetController {
    constructor(private readonly betService:BetService){};
};