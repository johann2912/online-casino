import { Roles } from "src/lib/enum/roles/roles.enum";
import { IUser } from "src/modules/users/interfaces/user.interface";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bets } from "./bets.entity";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class User extends Timestamp implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, nullable:true})
    nickname?: string;
    @Column({type: String, nullable:true, unique:true})
    email?: string;
    @Column({type: String, nullable:true})
    password?: string;
    @Column({type: String, nullable:true})
    phone?: string;
    @Column({type: Number, nullable:true})
    credits?: number;
    @Column({type: 'enum', enum: Roles, nullable:true})
    role?: Roles;
    @ManyToOne(
        (_type) => Bets, bet => bet.user
    )
    bet?:Bets;
};