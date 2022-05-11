import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UserAcquireCredit {
    @Expose()
    id:string;
    @ApiProperty()
    @Expose()
    credit_old:number;
    @ApiProperty()
    @Expose()
    credit_new:number;
}