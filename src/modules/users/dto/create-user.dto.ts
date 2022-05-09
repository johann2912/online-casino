import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Roles } from "src/lib/enum/roles/roles.enum";
import { IUserCreate } from "../interfaces/create-user.interface";

export class UserCreateDto implements IUserCreate {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nickname: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    credits: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    role: Roles;
};