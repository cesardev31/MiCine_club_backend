import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Mi Cine Club API')
    .setDescription('estas son las APIS de Mi Cine Club API')
    .setVersion('0.0.1')
    .addTag('user')
    .addTag('login')
    .addTag('uploads')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  await app.listen(port);
}
bootstrap();
