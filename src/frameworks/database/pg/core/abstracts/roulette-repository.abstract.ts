import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IRouletteRepository<T> extends IGenericRepository<T> {
    public abstract findAllFilterStatus(status?:string): Promise<T[]>;
};