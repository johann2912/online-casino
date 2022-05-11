import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roulette } from "./roulette.entity";
import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";

@Entity()
export class Bets extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type:String, nullable:true, unique:true})
    number_bet?: string;
    @Column({type:Number, nullable:true})
    color_bet?: number;
    @ManyToOne(
        (_type) => User, user => user.bet
    )
    @JoinColumn()
    user?:User;
    @ManyToOne(
        (_type) => Roulette, roulette => roulette.bet
    )
    @JoinColumn()
    roulette?: Roulette;
};