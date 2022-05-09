import { User, Roulette, RouletteDetails } from "../../entities";
import { IUserRepository } from "./user-repository.abstract";
import { IRouletteDetailsRepository } from "./roulette-details-repository.abstract";
import { IRouletteRepository } from "./roulette-repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly users: IUserRepository<User>;
    public abstract readonly roulettes: IRouletteRepository<Roulette>;
    public abstract readonly roulettesDetails: IRouletteDetailsRepository<RouletteDetails>;
};