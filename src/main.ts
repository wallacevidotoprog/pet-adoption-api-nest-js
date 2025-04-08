import { NestFactory } from '@nestjs/core';
import * as cookieParce from 'cookie-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParce());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
