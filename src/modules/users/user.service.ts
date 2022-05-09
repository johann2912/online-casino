import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { IUserCreate } from "./interfaces/create-user.interface";
import { IUserUpdate } from "./interfaces/update-user.interface";

@Injectable()
export class UserService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async create(data:IUserCreate){
       return await this.databaseService.users.create(data);
    };
    async update(email:string, data:IUserUpdate){
        const user = await this.databaseService.users.findByEmail(email);
        if(!user) this.exceptions.notFoundException({
            message: 'user does not found'
        })
        await this.databaseService.users.update(user.id, data);
    };
};