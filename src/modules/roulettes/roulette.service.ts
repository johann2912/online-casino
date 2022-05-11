import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { Roles } from "src/lib/enum/roles/roles.enum";
import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";
import { IUser } from "../users/interfaces/user.interface";
import { CreditNumberMatch } from "./functions/credit-earned-number-matched/credit-earned-matched.function";
import { WinnerColor } from "./functions/generate-winning-color/winnir-color.function";
import { WinningNumber } from "./functions/generate-winning-number/winnning-number.function";
import { IRouletteCreate } from "./interfaces/roulette/create-roulette.interface";

@Injectable()
export class RouletteService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async all(status?:StatusRoulette){
        const roulettes = await this.databaseService.roulettes.findAllFilterStatus(status);
        if(roulettes.length <= 0) this.exceptions.notFoundException({
            message: 'roulettes does not found'
        });

        return roulettes;
    }
    async create(session:string, data:IRouletteCreate){
        const user = await this.validateExistUser(session);
        await this.validateRolAdmin(user);
        
        return await this.databaseService.roulettes.create(data);
    };
    async openStatus(session:string, rouletteId:string){
        const user = await this.validateExistUser(session);
        await this.validateRolAdmin(user);
        const roulette = await this.validateIsExistRoulette(rouletteId);
        await this.databaseService.roulettes.update(
            roulette.id, 
            {status: StatusRoulette.OPEN}
        );

        return {
            id: roulette.id,
            status: StatusRoulette.OPEN,
        };
    };
    async closeStatus(session:string, rouletteId:string){
        const user = await this.validateExistUser(session);
        await this.validateRolAdmin(user);
        const roulette = await this.validateIsExistRoulette(rouletteId);
        await this.databaseService.roulettes.update(
            roulette.id, 
            {status: StatusRoulette.CLOSE}
        );
        const wonNumber = WinningNumber.generateNumber();
        const wonColor = WinnerColor.decideColor(wonNumber);
        const allBets = await this.databaseService.bets.findAllByRoulette(roulette.id, false);
        await this.betComplete(allBets, wonNumber, wonColor);

        return {
            id: roulette.id,
            status: StatusRoulette.CLOSE,
            wonNumber,
            wonColor,
        };
    };
    async delete(session:string, rouletteId:string){
        const user = await this.validateExistUser(session);
        await this.validateRolAdmin(user);
        const roulette = await this.validateIsExistRoulette(rouletteId);
        await this.databaseService.roulettes.delete(roulette.id);
    };
    private async validateExistUser(id:string){
        const user = await this.databaseService.users.findOne(id);
        if(!user) this.exceptions.notFoundException({
            message: 'user does not found'
        });

        return user;
    };
    private async validateRolAdmin(user:IUser){
        if(user.role != Roles.ADMIN) this.exceptions.UnauthorizedException({
            message: 'user does not have permission to create a roulette wheel',
        })
    };
    private async validateIsExistRoulette(rouletteId:string){
        const roulette = await this.databaseService.roulettes.findOne(rouletteId);
        if(!roulette) this.exceptions.notFoundException({
            message: 'roulette does not found'
        });

        return roulette;
    };
    private async betComplete(allBets, wonNumber:number, wonColor:ColorBet){
        for (const bet of allBets) {
            await this.databaseService.bets.update(bet.bet_id, {
                realized: true
            });
            const user = await this.databaseService.users.findOne(bet.bet_userId)
            const wonCredits = CreditNumberMatch.WonCredit(bet.bet_number_bet, bet.bet_color_bet, wonNumber, wonColor);
            const {wonCreditPerNumber, wonCreditByColor} = wonCredits;
            await this.addwonCreditsUser(user, wonCreditPerNumber, wonCreditByColor);
        };
    };
    private async addwonCreditsUser(user:IUser, wonCreditPerNumber?:number, wonCreditByColor?:number){
        if(wonCreditPerNumber){
            await this.databaseService.users.update(user.id,{
                credits: Math.floor(user.credits + wonCreditPerNumber)
            });
        };
        if(wonCreditByColor){
            await this.databaseService.users.update(user.id,{
                credits: Math.floor(user.credits + wonCreditByColor)
            });
        };
    };
};