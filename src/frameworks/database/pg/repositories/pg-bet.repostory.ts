import { IBetRepository } from "../core/abstracts/bet-repository.abstrac";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgBetRepository<T> 
    extends PgGenericRepository<T>
    implements IBetRepository<T>
{};