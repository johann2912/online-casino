import { Player, Roulette, RouletteDetails } from "../../entities";
import { IPlayerRepository } from "./player-repository.abstract";
import { IRouletteDetailsRepository } from "./roulette-details-repository.abstract";
import { IRouletteRepository } from "./roulette-repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly players: IPlayerRepository<Player>;
    public abstract readonly roulettes: IRouletteRepository<Roulette>;
    public abstract readonly roulettesDetails: IRouletteDetailsRepository<RouletteDetails>;
};