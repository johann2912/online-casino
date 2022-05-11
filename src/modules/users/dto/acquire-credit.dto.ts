import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class  UserAcquireNewCreditDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    credit_new:number;
};