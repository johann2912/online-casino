import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Session, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { StatusRoulette } from "src/lib/enum/status-roulette.num";
import { AccessGuard } from "src/lib/guards/access.guard";
import { IAccess } from "src/lib/jwt/interfaces/access";
import { RouletteDeletetDto } from "./dto/delete.dto";
import { RouletteCreateDto } from "./dto/roulette/create-roulette.dto";
import { RouletteCreateOutputDto } from "./output/roulette/create-roulette-output";
import { RouletteUpdateStatusOutput } from "./output/roulette/update-status-roulette-output";
import { RouletteService } from "./roulette.service";

@ApiTags('Roulettes')
@Controller('Roulettes')
export class RouletteController {
    constructor(private readonly rouletteService:RouletteService) {};

    @Get('all/:status')
    @ApiOkResponse({type: [RouletteCreateOutputDto]})
    @ApiQuery({
        type:'enum', 
        enum:StatusRoulette,
        name:'status', 
        required:false
    })
    async allRoulettes(
        @Query('status') status:StatusRoulette
    ){
        const roulettes = await this.rouletteService.all(status);
        return plainToClass(RouletteCreateOutputDto, roulettes, {excludeExtraneousValues:true});
    }
    @Post('create')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: RouletteCreateOutputDto})
    async create(
        @Session() session:IAccess,
        @Body() data:RouletteCreateDto,
    ){
        const roulette = await this.rouletteService.create(session.id, data);
        return plainToClass(RouletteCreateOutputDto, roulette, {excludeExtraneousValues:true});
    };
    @Patch('change-status-open/:rouletteId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: RouletteUpdateStatusOutput})
    async openStatus(
        @Session() session:IAccess,
        @Param('rouletteId') rouletteId:string,
    ){
        const roulette = await this.rouletteService.openStatus(
            session.id,
            rouletteId,
        );
        
        return plainToClass(RouletteCreateOutputDto, roulette, {excludeExtraneousValues:true});
    };
    @Delete('delete/:rouletteId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({type: RouletteDeletetDto})
    async delete(
        @Session() session:IAccess,
        @Param('rouletteId') rouletteId:string,
    ){
        await this.rouletteService.delete(session.id, rouletteId);
        return { message: 'Ok delete' }
    };
};