import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const fs = require('fs');

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secret/localhost.pem'),
    cert: fs.readFileSync('./secret/localhost.crt'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors();
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
