import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IRouletteCreate } from "../../interfaces/roulette/create-roulette.interface";

export class RouletteCreateOutputDto implements IRouletteCreate {
    @Expose()
    id?: string;
    @ApiProperty()
    @Expose()
    name?: string;
    @ApiProperty()
    @Expose()
    min_bet?: number;
    @ApiProperty()
    @Expose()
    max_bet?: number;
};