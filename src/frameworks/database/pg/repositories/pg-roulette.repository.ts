import { IRouletteRepository } from "../core/abstracts/roulette-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgRouletteRepository<T> 
    extends PgGenericRepository<T>
    implements IRouletteRepository<T>
{};