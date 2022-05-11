import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";
import { IRoulette } from "./roulette.interface";

export interface IRouletteCreate extends IRoulette {
    id?:string;
    name?:string;
    min_bet?:number;
    max_bet?:number;
    status?:StatusRoulette;
};