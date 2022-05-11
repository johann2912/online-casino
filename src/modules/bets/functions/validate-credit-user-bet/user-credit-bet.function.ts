import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "src/modules/users/interfaces/user.interface";

export class CalculateCreditUser {
    public static ValidateCreditUserBet(user:IUser, roulette:IRoulette, usercreditBet:number){
        const exceptions = new ExceptionsService();
        if(user.credits < roulette.min_bet || user.credits > roulette.max_bet){
            exceptions.internalServerErrorException({
                message: 'the balance wagered is not accepted'
            });
        };
        if(usercreditBet < roulette.min_bet){
            exceptions.internalServerErrorException({
                message: 'the user does not have the necessary credits'
            });
        };
    };
};