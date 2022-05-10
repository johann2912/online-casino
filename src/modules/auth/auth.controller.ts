import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { AuthService } from "./auth.service";
import { AuthOutput } from "./output/login-output";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {};

    @Get('login/:email/:password')
    @ApiOkResponse({type: AuthOutput})
    async login(
        @Param('email') email:string,
        @Param('password') password:string,
    ){
        const login = await this.authService.login(email, password);
        return plainToClass(AuthOutput, login, {excludeExtraneousValues:true});
    };
};