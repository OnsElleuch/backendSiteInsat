import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: ['http://localhost:4200/'],
  });
  const options = new DocumentBuilder()
    .setTitle('Backend Insat')
    .setDescription('site Insat Frontedn and Backoffice REST API Backend')
    .setVersion('1.0')
    .addTag('insat')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
