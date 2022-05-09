import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { UserCreateDto } from "./dto/create-user.dto";
import { UserCreateOutput } from "./output/user-create-output";
import { UserService } from "./user.service";

@ApiTags('user')
@Controller()
export class UsersController {
    constructor(private readonly userService: UserService){};

    @Post('create')
    @ApiOkResponse({type: UserCreateOutput})
    public async create(
        @Body() data: UserCreateDto,
    ){
        const user = await this.userService.create(data);
        return plainToClass(UserCreateOutput, user, {excludeExtraneousValues:true});
    };
};