import { IRouletteDetailsRepository } from "../core/abstracts/roulette-details-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgRouletteDetailsRepository<T> 
    extends PgGenericRepository<T>
    implements IRouletteDetailsRepository<T>
{};