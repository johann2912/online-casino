import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "src/modules/users/interfaces/user.interface";
import { IBet } from "./bet.interface";

export interface IBetCreate extends IBet {
    id?:string
    number_bet?: number;
    color_bet?:ColorBet;
    credits_bets?:number;
    realized?:boolean
    user?:IUser;
    roulette?:IRoulette;
}