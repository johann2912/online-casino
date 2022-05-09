import { Roles } from "src/lib/enum/roles/roles.enum";

export interface IUserUpdate {
    nickname?:string;
    email?:string;
    password?:string;
    credits?:number;
    phone?: string;
    role?: Roles;
};