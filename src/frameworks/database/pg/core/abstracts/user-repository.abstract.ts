import { IUserCreate } from "src/modules/users/interfaces/create-user.interface";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IUserRepository<T> extends IGenericRepository<T> {
    public abstract findByEmail(email:string): Promise<T>;
    public abstract findByUserName(nickname:string): Promise<T>;
};