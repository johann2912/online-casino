import { ApiProperty } from "@nestjs/swagger";
import { StatusRoulette } from "src/lib/enum/status-roulette/status-roulette.num";

export class RouletteUpdateStatusOutput {
    @ApiProperty()
    status:StatusRoulette;
};