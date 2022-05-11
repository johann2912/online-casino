import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IBetCreate } from "../interfaces/create-bet.interface";

export class BetCreateDto implements IBetCreate {
    @ApiProperty({required:false})
    @IsString()
    number_bet?: string;
    @ApiProperty({type:'enum', enum:ColorBet, required:false})
    color_bet?:ColorBet;
    @ApiProperty()
    @IsNumber()
    credits_bets?:number;
    @ApiProperty()
    @IsString()
    user_id?:string;
    @ApiProperty()
    @IsString()
    roulette_id?: string;
}