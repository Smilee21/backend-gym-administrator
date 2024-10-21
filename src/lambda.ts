import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    nestApp.enableCors();
    await nestApp.init();
    const config = new DocumentBuilder()
      .addBearerAuth()
      .addSecurityRequirements('bearer')
      .setTitle('F')
      .setDescription('The F API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('swagger', nestApp, document);
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};
