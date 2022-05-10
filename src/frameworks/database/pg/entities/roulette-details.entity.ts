import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roulette } from "./roulette.entity";
import { Timestamp } from "./timestamp.entity";

@Entity()
export class RouletteDetails extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, nullable:true})
    last_winning_numbers?: string;
    @ManyToOne(
        (_type) => Roulette, roulette => roulette.roulette_details,
    )
    roulette?: Roulette;
};