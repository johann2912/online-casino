import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { UserAcquireNewCreditDto } from "./dto/acquire-credit.dto";
import { CalculateCredit } from "./functions/calculate-acquire/acquire";
import { HashPassword } from "./functions/hashed/password";
import { IUserCreate } from "./interfaces/create-user.interface";
import { IUserUpdate } from "./interfaces/update-user.interface";

@Injectable()
export class UserService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async allUsers(){
        const users = await this.databaseService.users.findAll();
        if(users.length <= 0) this.exceptions.notFoundException({
            message: 'users does not found'
        });

        return users
    };
    async acquireCredit(session:string, {credit_new}:UserAcquireNewCreditDto){
        const user = await this.databaseService.users.findOne(session)
        const newCredit =  CalculateCredit.calculateAcquireCredit(
            user.credits,
            credit_new,
        );
        await this.databaseService.users.update(user.id,{
            credits: newCredit
        });

        return {
            id: user.id,
            credit_old: user.credits,
            credit_new: newCredit,
        };
    };
    async searchUserByEmail(email:string){
       return await this.validateIsExistUser(email);
    };
    async create({password, ...data}:IUserCreate){
       const user:IUserCreate = {
            ...data,
            password: HashPassword.encryptPassword(password),
       };

       return await this.databaseService.users.create(user);
    };
    async update(email:string, data:IUserUpdate){
        const user = await this.validateIsExistUser(email);
        await this.databaseService.users.update(user.id, data);
    };
    async delete(email:string){
        const user = await this.validateIsExistUser(email);
        await this.databaseService.users.delete(user.id);
    }
    private async validateIsExistUser(email:string){
        const user = await this.databaseService.users.findByEmail(email);
        if(!user) this.exceptions.notFoundException({
            message: 'user does not found'
        });

        return user;
    };
};