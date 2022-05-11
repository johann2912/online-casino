import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDatabaseAbstract } from "./core/abstracts/database.abstract";
import { IUserRepository } from "./core/abstracts/user-repository.abstract";
import { IRouletteDetailsRepository } from "./core/abstracts/roulette-details-repository.abstract";
import { IRouletteRepository } from "./core/abstracts/roulette-repository.abstract";
import { User, Roulette, RouletteDetails } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PgUserRepository } from "./repositories/pg-user.repository";
import { PgRouletteRepository } from "./repositories/pg-roulette.repository";
import { PgRouletteDetailsRepository } from "./repositories/pg-roulette-details.repository";
import { IBetRepository } from "./core/abstracts/bet-repository.abstrac";
import { Bets } from "./entities/bets.entity";
import { PgBetRepository } from "./repositories/pg-bet.repostory";

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public users: IUserRepository<User>;
  public roulettes: IRouletteRepository<Roulette>;
  public roulettesDetails: IRouletteDetailsRepository<RouletteDetails>;
  public bets: IBetRepository<Bets>;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Roulette)
    private readonly rouletteRepository: Repository<Roulette>,
    @InjectRepository(RouletteDetails)
    private readonly rouletteDetailsRepository: Repository<RouletteDetails>,
    @InjectRepository(Bets)
    private readonly BetRepository: Repository<Bets>
  ) {};

  public onApplicationBootstrap() {
    this.users = new PgUserRepository<User>(this.userRepository);
    this.roulettes = new PgRouletteRepository<Roulette>(this.rouletteRepository);
    this.roulettesDetails = new PgRouletteDetailsRepository<RouletteDetails>(
      this.rouletteDetailsRepository
    );
    this.bets = new PgBetRepository<Bets>(this.BetRepository);
  };
};