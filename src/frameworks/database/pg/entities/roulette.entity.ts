import { IRoulette } from "src/modules/roulettes/interfaces/roulette/roulette.interface";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RouletteDetails } from "./roulette-details.entity";
import { Timestamp } from "./timestamp.entity";

@Entity()
export class Roulette extends Timestamp implements IRoulette {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, nullable:true, unique:true})
    name?: string;
    @Column({type: Number, nullable:true})
    min_bet?: number;
    @Column({type: Number, nullable:true})
    max_bet?: number;
    @ManyToOne(
        (_type) => RouletteDetails, roulette_details => roulette_details.roulette,
    )
    roulette_details?: RouletteDetails;
};