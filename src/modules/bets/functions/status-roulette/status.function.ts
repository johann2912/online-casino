import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";

export class ValidateStatusRoulette {
    public static Status(roulette:IRoulette){
        const exceptions = new ExceptionsService();
        if(roulette.status !== StatusRoulette.OPEN) exceptions.internalServerErrorException({
            message: `Roulette does not accept any more bets, status: ${roulette.status}`
        });
    };
};