import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { IUser } from "src/modules/users/interfaces/user.interface";

export interface IBet {
    id?:string
    createAt?:Date;
    updateAt?:Date;
    deleteAt?:Date;
    number_bet?: number;
    color_bet?:ColorBet;
    credits_bets?:number;
    realized?:boolean,
    user?:IUser;
    roulette?: IRoulette;
};