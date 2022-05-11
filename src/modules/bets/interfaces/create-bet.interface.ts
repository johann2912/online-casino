import { Roulette, User } from "src/frameworks/database/pg/entities";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IBet } from "./bet.interface";

export interface IBetCreate extends IBet {
    id?:string
    number_bet?: string;
    color_bet?:ColorBet;
    credits_bets?:number;
    user?:User;
    roulette?: Roulette;
}