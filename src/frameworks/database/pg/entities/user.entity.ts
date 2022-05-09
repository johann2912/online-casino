import { Roles } from "src/lib/enum/roles/roles.enum";
import { IUser } from "src/modules/users/interfaces/user.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./timestamp.entity"; 

@Entity()
export class User extends Timestamp implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String})
    nickname: string;
    @Column({type: String, unique: true})
    email: string;
    @Column({type: String})
    password: string;
    @Column({type: String})
    phone: string;
    @Column({type: Number, nullable:true})
    credits: number;
    @Column({type: 'enum', enum: Roles})
    role: Roles;
};