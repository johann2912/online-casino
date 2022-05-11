import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { Roulette } from "./roulette.entity";
import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";

@Entity()
export class Bets extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type:String, nullable:true, unique:true})
    number_bet?: string;
    @Column({type:'enum', enum:ColorBet, nullable:true})
    color_bet?:ColorBet;
    @Column({type:Number, nullable:true})
    credits_bets?:number;
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