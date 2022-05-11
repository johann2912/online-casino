import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Roulette, User } from "src/frameworks/database/pg/entities";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IBetCreate } from "../interfaces/create-bet.interface";

export class BetCreateOutput implements IBetCreate {
    @Expose()
    id?:string
    @ApiProperty()
    @Expose()
    number_bet?: string;
    @ApiProperty()
    @Expose()
    color_bet?:ColorBet;
    @ApiProperty()
    @Expose()
    credits_bets?:number;
    @ApiProperty()
    @Expose()
    user?:User;
    @ApiProperty()
    @Expose()
    roulette?: Roulette;
};