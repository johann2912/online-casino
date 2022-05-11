import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { Roulette, User } from "src/frameworks/database/pg/entities";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "src/modules/users/interfaces/user.interface";
import { IBetCreate } from "../interfaces/create-bet.interface";

export class BetCreateOutput implements IBetCreate {
    @Expose()
    id?:string
    @ApiProperty()
    @Expose()
    number_bet?: number;
    @ApiProperty()
    @Expose()
    color_bet?:ColorBet;
    @ApiProperty()
    @Expose()
    credits_bets?:number;
    @Exclude()
    user?:IUser;
    @Exclude()
    roulette?:IRoulette;
};