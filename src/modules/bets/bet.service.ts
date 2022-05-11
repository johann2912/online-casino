import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { RedisService } from "src/frameworks/database/redis/redis.service";
import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";
import { IRoulette } from "../roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "../users/interfaces/user.interface";
import { CalculateNumberRange } from "./functions/number-range-roulette/number-range.function";
import { ValidateStatusRoulette } from "./functions/status-roulette/status.function";
import { CalculateCreditUser } from "./functions/validate-credit-user-bet/user-credit-bet.function";
import { IBetCreate } from "./interfaces/create-bet.interface";

@Injectable()
export class BetService {
    constructor(
        private databaseService:IDatabaseAbstract, 
        private exceptions:ExceptionsService,
        private redisService:RedisService,
    ){};

    async create(session:string, rouletteId:string, {user, number_bet, ...data}:IBetCreate){
        const userInstance = await this.validateSearchtUser(session);
        const rouletteInstance = await this.validateSearchRoulette(rouletteId);
        await ValidateStatusRoulette.Status(rouletteInstance);
        await CalculateNumberRange.NumberRangeRoulette(number_bet);
        await CalculateCreditUser.ValidateCreditUserBet(userInstance, rouletteInstance, number_bet);
        await this.updateCreditsUser(userInstance, number_bet);
        const createBet:IBetCreate = {
            ...data,
            user: userInstance,
            number_bet,
            roulette: rouletteInstance,
        }; 
        const bet = await this.databaseService.bets.create(createBet);

        return bet;
    };
    private async validateSearchtUser(id:string){
        const user = await this.databaseService.users.findOne(id);
        if(!user) this.exceptions.notFoundException({
            message: 'user does not found'
        });

        return user;
    };
    private async validateSearchRoulette(id:string){
        const roulette = await this.databaseService.roulettes.findOne(id);
        if(!roulette) this.exceptions.notFoundException({
            message: 'roulette does not found'
        });

        return roulette;
    };
    private async updateCreditsUser(user:IUser, creditBets:number){
        const newCreditBalance = user.credits - creditBets;
        await this.databaseService.users.update(user.id, { 
            credits: newCreditBalance
        });
    };
};