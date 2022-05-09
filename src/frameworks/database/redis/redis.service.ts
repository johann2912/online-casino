import { Tedis } from 'tedis';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RedisService {
  private readonly logger: Logger = new Logger('Redis');
  private tedis: Tedis;
  constructor(config: ConfigService) {
    let redis = {
        host: config.get<string>('REDIS_HOST_DEV'),
        port: config.get<number>('REDIS_PORT_DEV'),
    };
    this.tedis = new Tedis(redis);
    this.logger.log('Redis connection established');
  };
};