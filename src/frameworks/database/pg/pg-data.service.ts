import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDatabaseAbstract } from "./core/abstracts/database.abstract";
import { IPlayerRepository } from "./core/abstracts/player-repository.abstract";
import { IRouletteDetailsRepository } from "./core/abstracts/roulette-details-repository.abstract";
import { IRouletteRepository } from "./core/abstracts/roulette-repository.abstract";
import { Player, Roulette, RouletteDetails } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PgPlayerRepository } from "./repositories/pg-player.repository";
import { PgRouletteRepository } from "./repositories/pg-roulette.repository";
import { PgRouletteDetailsRepository } from "./repositories/pg-roulette-details.repository";

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public players: IPlayerRepository<Player>;
  public roulettes: IRouletteRepository<Roulette>;
  public roulettesDetails: IRouletteDetailsRepository<RouletteDetails>;

  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Roulette)
    private readonly rouletteRepository: Repository<Roulette>,
    @InjectRepository(RouletteDetails)
    private readonly rouletteDetailsRepository: Repository<RouletteDetails>,
  ) {};

  public onApplicationBootstrap() {
    this.players = new PgPlayerRepository<Player>(this.playerRepository);
    this.roulettes = new PgRouletteRepository<Roulette>(this.rouletteRepository);
    this.roulettesDetails = new PgRouletteDetailsRepository<RouletteDetails>(
      this.rouletteDetailsRepository
    );
  };
};