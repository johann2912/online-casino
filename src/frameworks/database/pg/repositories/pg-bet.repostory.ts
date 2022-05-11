import { IBetRepository } from "../core/abstracts/bet-repository.abstrac";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgBetRepository<T> 
    extends PgGenericRepository<T>
    implements IBetRepository<T>
{
    public async findAllByRoulette(rouletteId:string, realized:boolean): Promise<T[]> {
        return await this._repository.createQueryBuilder('bet')
            .where('bet.roulette = :id', {id: rouletteId})
            .andWhere('bet.realized = :realized', {realized})
            .getRawMany();
    };
};