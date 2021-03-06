import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IBetRepository<T> extends IGenericRepository<T> {
    public abstract findAllByRoulette(rouletteId:string, realized:boolean): Promise<T[]>
};