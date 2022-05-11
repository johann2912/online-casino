import { ExceptionsService } from "src/config/exceptions/exceptions.service";

export class CalculateNumberRange {
    public static NumberRangeRoulette(numberBet:Number){
        const exceptions = new ExceptionsService()
        const minNumberRoulette = 0;
        const maxNumberRoulette = 36;
        if(numberBet < minNumberRoulette || numberBet > maxNumberRoulette){
            exceptions.internalServerErrorException({
                message: `the valid range of numbers to bet on is: ${minNumberRoulette} - ${maxNumberRoulette}`
            });
        };
    };
};