import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { IUserCreate } from "./interfaces/create-user.interface";

@Injectable()
export class UserService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async create(item:IUserCreate){
       return await this.databaseService.users.create(item);
    }
};