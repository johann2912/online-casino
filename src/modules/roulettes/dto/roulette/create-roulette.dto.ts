import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { IRouletteCreate } from "../../interfaces/roulette/create-roulette.interface";

export class RouletteCreateDto implements IRouletteCreate {
    @ApiProperty()
    @IsString()
    name?: string;
    @ApiProperty()
    @IsNumber()
    min_bet?: number;
    @ApiProperty()
    @IsNumber()
    max_bet?: number;
};