import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IUserUpdate } from "../interfaces/update-user.interface";

export class UserUpdateDto implements IUserUpdate {
    @ApiProperty({required: false})
    @IsString()
    nickname: string;
     @ApiProperty({required: false})
    @IsString()
    email: string;
     @ApiProperty({required: false})
    @IsString()
    password: string;
     @ApiProperty({required: false})
    @IsString()
    phone: string;
};