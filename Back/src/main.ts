import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  const config = new DocumentBuilder()
  .setTitle('Bot API')
  .setDescription('помощник важный бумажный')
  .setVersion('1.0')
  .addTag('Bot', 'операции для взаимодействия с электронным помощником')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
