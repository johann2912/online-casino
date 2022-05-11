import { IRouletteRepository } from "../core/abstracts/roulette-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgRouletteRepository<T> 
    extends PgGenericRepository<T>
    implements IRouletteRepository<T>
{
    public async findAllFilterStatus(status?:string): Promise<T[]> {
        const query = await this._repository
            .createQueryBuilder('roulettes')
            if(status) query.where('roulettes.status = :status', {status})
        return query.getMany();
    };
};