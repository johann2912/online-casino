import { IPlayerRepository } from "../core/abstracts/player-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgPlayerRepository<T> 
    extends PgGenericRepository<T>
    implements IPlayerRepository<T>
{
    public findByPlayerName(nickname: string): Promise<T> {
        return this._repository.findOne({ where: { nickname }});
    };

    public async findByEmail(email: string): Promise<T> {
        return this._repository.findOne({ where: { email } });
    };
};