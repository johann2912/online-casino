import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { Roles } from "src/lib/enum/roles/roles.enum";
import { StatusRoulette } from "src/lib/enum/status-roulette.num";
import { IUser } from "../users/interfaces/user.interface";
import { IRouletteCreate } from "./interfaces/roulette/create-roulette.interface";

@Injectable()
export class RouletteService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

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
};