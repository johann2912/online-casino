import { Body, Controller, Delete, Get, Param, Post, Session, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { AccessGuard } from "src/lib/guards/access.guard";
import { IAccess } from "src/lib/jwt/interfaces/access";
import { UserAcquireNewCreditDto } from "./dto/acquire-credit.dto";
import { UserCreateDto } from "./dto/create-user.dto";
import { UserUpdateDto } from "./dto/update-user.dto";
import { UserAcquireCredit } from "./output/acquire-credit-output";
import { UserCreateOutput } from "./output/user-create-output";
import { UserUpdateOutput } from "./output/user-update-output";
import { UserService } from "./user.service";

@ApiTags('Users')
@Controller('Users')
export class UsersController {
    constructor(private readonly userService: UserService){};

    @Get('all')
    @ApiOkResponse({type: [UserCreateOutput]})
    public async allUsers(){
        const users = await this.userService.allUsers();
        return plainToClass(UserCreateOutput, users, {excludeExtraneousValues:true});
    };
    @Get('by-email/:email')
    @ApiOkResponse({type: UserCreateOutput})
    public async searchUserByEmail(
        @Param('email') email: string,
    ){
        const user = await this.userService.searchUserByEmail(email);
        return plainToClass(UserCreateOutput, user, {excludeExtraneousValues:true});
    };
    @Post('acquire-credits')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: UserAcquireCredit})
    async acquireCredits(
        @Session() session:IAccess,
        @Body() credit:UserAcquireNewCreditDto,
    ){
        const user = await this.userService.acquireCredit(session.id, credit);
        return plainToClass(UserAcquireCredit, user, {excludeExtraneousValues:true});
    };
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
    @Delete('delete/:email')
    async delete(
        @Param('email') email:string,
    ){
        const user = await this.userService.delete(email);
        return plainToClass(UserUpdateOutput, user, {excludeExtraneousValues:true});
    }
};