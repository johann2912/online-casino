import { Roles } from "src/lib/enum/roles/roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class User extends Timestamp {
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
};