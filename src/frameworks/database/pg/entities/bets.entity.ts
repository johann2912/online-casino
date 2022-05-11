import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { Roulette } from "./roulette.entity";
import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";
import { IBet } from "src/modules/bets/interfaces/bet.interface";

@Entity()
export class Bets extends Timestamp implements IBet {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type:Number, nullable:true})
    number_bet?:number;
    @Column({type:'enum', enum:ColorBet, nullable:true})
    color_bet?:ColorBet;
    @Column({type:Number, nullable:true})
    credits_bets?:number;
    @Column({type:Boolean, default:false})
    realized?:boolean;
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