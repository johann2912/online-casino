import { Roles } from "src/lib/enum/roles/roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class User extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: String})
    nickname: string;
    @Column({type: String, unique: true})
    email: string;
    @Column({type: String})
    password: string;
    @Column({type: String})
    phone: string;
    @Column({type: Number})
    credits: number;
    @Column({type: 'enum', enum: Roles})
    role: Roles;
};