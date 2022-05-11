import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";
import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";

export class RouletteCloseOutput {
    @ApiProperty()
    @Expose()
    id:string;
    @ApiProperty()
    @Expose()
    status:StatusRoulette;
    @ApiProperty()
    @Expose()
    wonNumber?:number;
    @ApiProperty()
    @Expose()
    wonColor?:ColorBet;
};