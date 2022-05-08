import { SwaggerConfig } from './config/swagger/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api/v1/casino/');
  app.use(
    '/api/v1/casino/',
    basicAuth({
      challenge: true,
      users: { masiv: configService.get<string>('SWAGGER_PASS') }
    }),
  );
  SwaggerConfig.ConfigSwaggerModule(app);
  await app.listen(3000);
};
bootstrap();