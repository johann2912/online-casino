import { Roles } from "src/lib/enum/roles/roles.enum";

export interface IUserCreate {
    nickname:string;
    email:string;
    password:string;
    phone:string;
    credits:number;
    role:Roles;
};