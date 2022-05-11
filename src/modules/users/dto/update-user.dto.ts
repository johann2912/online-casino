import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { Roles } from "src/lib/enum/roles/roles.enum";
import { IUserUpdate } from "../interfaces/update-user.interface";

export class UserUpdateDto implements IUserUpdate {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    nickname?: string;
    @ApiProperty({required: false})
    @IsOptional()
    @IsEmail()
    email?: string;
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    password?: string;
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    phone?: string;
    @ApiProperty({required: false})
    @IsOptional()
    @IsNumber()
    credits?: number;
    @ApiProperty({required: false})
    @IsOptional()
    role?: Roles;
};