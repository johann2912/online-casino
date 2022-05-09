import { IUserRepository } from "../core/abstracts/user-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgUserRepository<T> 
    extends PgGenericRepository<T>
    implements IUserRepository<T>
{
   
    public findByUserName(nickname: string): Promise<T> {
        return this._repository.findOne({ where: { nickname }});
    };

    public async findByEmail(email: string): Promise<T> {
        return this._repository.findOne({ where: { email } });
    };
};