import { Roles } from "src/lib/enum/roles/roles.enum";

export interface IUser {
    id?:string
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    nickname: string;
    email: string;
    password: string;
    phone: string;
    credits: number;
    role: Roles;
};