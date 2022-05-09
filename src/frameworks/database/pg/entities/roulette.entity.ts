import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RouletteDetails } from "./roulette-details.entity";
import { Timestamp } from "./timestamp.entity";

@Entity()
export class Roulette extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: String})
    name: string;
    @Column({type: Number})
    min_bet: number;
    @Column({type: Number})
    max_bet: number;
    @ManyToOne(
        (_type) => RouletteDetails, roulette_details => roulette_details.roulette,
    )
    roulette_details: RouletteDetails;
};