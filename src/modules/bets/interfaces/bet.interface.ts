import { Roulette, User } from "src/frameworks/database/pg/entities";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";

export interface IBet {
    id?:string
    createAt?:Date;
    updateAt?:Date;
    deleteAt?:Date;
    number_bet?: string;
    color_bet?:ColorBet;
    credits_bets?:number;
    user?:User;
    roulette?: Roulette;
};