import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { Roles } from "src/lib/enum/roles/roles.enum";
import { IUserCreate } from "../interfaces/create-user.interface";

export class UserCreateOutput implements IUserCreate {
    @Expose()
    id: string;
    @ApiProperty()
    @Expose()
    nickname: string;
    @ApiProperty()
    @Expose()
    email: string;
    @ApiProperty()
    @Exclude()
    password: string;
    @ApiProperty()
    @Expose()
    phone: string;
    @ApiProperty()
    @Expose()
    credits: number;
    @ApiProperty()
    @Expose()
    role: Roles;
};