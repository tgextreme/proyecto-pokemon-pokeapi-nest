import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  server.set('views', path.join(__dirname, '..', 'views'));
  server.set('view engine', 'ejs');

  await app.listen(3000);
}
bootstrap();




