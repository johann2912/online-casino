import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";

export interface IRoulette {
    id?:string
    createAt?:Date;
    updateAt?:Date;
    deleteAt?:Date;
    name?: string;
    min_bet?:number;
    max_bet?:number;
    status?:StatusRoulette;
};