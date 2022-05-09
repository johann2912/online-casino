import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { UserCreateDto } from "./dto/create-user.dto";
import { UserUpdateDto } from "./dto/update-user.dto";
import { UserCreateOutput } from "./output/user-create-output";
import { UserUpdateOutput } from "./output/user-update-output";
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
    @Post('update/:email')
    @ApiOkResponse({type:UserUpdateOutput})
    public async update(
        @Param('email') email:string,
        @Body() data: UserUpdateDto,
    ){
        const user = await this.userService.update(email, data);
        return plainToClass(UserUpdateOutput, user, {excludeExtraneousValues:true});
    };
};