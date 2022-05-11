import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "src/modules/users/interfaces/user.interface";
import { IBetCreate } from "../interfaces/create-bet.interface";

export class BetCreateDto implements IBetCreate {
    @ApiProperty({required:false, nullable:true})
    @IsNumber()
    number_bet?: number;
    @ApiProperty({type:'enum', enum:ColorBet, required:false, nullable:true})
    color_bet?:ColorBet;
    @ApiProperty()
    @IsNumber()
    credits_bets?:number;
    user_id?:IUser;
    @ApiProperty()
    roulette_id?:string;
}