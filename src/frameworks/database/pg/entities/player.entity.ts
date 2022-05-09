import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class Player extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: String})
    nickname: string;
    @Column({type: String})
    email: string;
    @Column({type: String})
    password: string;
    @Column({type: String})
    phone: string;
    @Column({type: Number})
    credits: number;
};