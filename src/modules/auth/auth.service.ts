import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/database/pg/core/abstracts/database.abstract";
import { JWTService } from "src/lib/jwt/jwt.service";
import { HashPassword } from "../users/functions/hashed/password";

@Injectable()
export class AuthService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
        private jwtService: JWTService,
    ) {};

    async login(email:string, password:string){
        const user = await this.databaseService.users.findByEmail(email);
        if (user && HashPassword.verifyPassword(password, user.password)) {
            return {
              access: await this.jwtService.createAccess({ id: user.id }),
              refresh: await this.jwtService.createRefresh({ id: user.id }),
            };
        };
        this.exceptions.UnauthorizedException({message: 'Invalid credential'});
    };
};