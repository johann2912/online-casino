import { IUserCreate } from "src/modules/users/interfaces/create-user.interface";
import { IUserRepository } from "../core/abstracts/user-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgUserRepository<T> 
    extends PgGenericRepository<T>
    implements IUserRepository<T>
{
    public async findByUserName(nickname: string): Promise<T> {
        return this._repository.findOne({ where: { nickname }});
    };

    public async findByEmail(email: string): Promise<T> {
        return this._repository.findOne({ where: { email } });
    };
};