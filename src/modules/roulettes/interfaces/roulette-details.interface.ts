import { IRoulette } from "./roulette.interface";

export interface IRouletteDetails {
    id?:string;
    last_winning_numbers?: string;
    roulette_details?: IRoulette;
};