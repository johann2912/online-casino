import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";
import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bets } from "./bets.entity";
import { RouletteDetails } from "./roulette-details.entity";
import { Timestamp } from "./timestamp.entity";

@Entity()
export class Roulette extends Timestamp implements IRoulette {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type:String, nullable:true, unique:true})
    name?: string;
    @Column({type:Number, nullable:true})
    min_bet?: number;
    @Column({type:Number, nullable:true})
    max_bet?: number;
    @Column({type:'enum', enum:StatusRoulette, nullable:true})
    status?:StatusRoulette;
    @ManyToOne(
        (_type) => RouletteDetails, roulette_details => roulette_details.roulette,
    )
    roulette_details?: RouletteDetails;
    @ManyToOne(
        (_type) => Bets, bet => bet.roulette
    )
    bet?:Bets;
};