import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Ilogin } from "../interfaces/login.interface";

export class LoginDto implements Ilogin {
    @ApiProperty()
    email:string;
    @ApiProperty()
    password:string;
};