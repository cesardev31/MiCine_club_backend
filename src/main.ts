import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  const config = new DocumentBuilder()
    .setTitle('Mi Cine Club API')
    .setDescription('estas son las APIS de Mi Cine Club API')
    .setVersion('0.0.1')
    .addTag('user')
    .addTag('auth')
    .addTag('uploads')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  await app.listen(port);
}
bootstrap();
