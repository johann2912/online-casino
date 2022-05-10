import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {};
};