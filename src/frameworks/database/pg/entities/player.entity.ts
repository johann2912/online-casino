import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class Player extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: 'string', unique: true})
    nickname: string;
    @Column({type: 'string'})
    email: string;
    @Column({type: 'string'})
    password: string;
    @Column({type: 'string'})
    phone: string;
    @Column({type: "number"})
    credits: number;
};