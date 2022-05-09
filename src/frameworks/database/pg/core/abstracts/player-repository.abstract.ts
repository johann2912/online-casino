import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IPlayerRepository<T> extends IGenericRepository<T> {
    public abstract findByEmail(email:string): Promise<T>;
    public abstract findByPlayerName(nickname:string): Promise<T>;
};