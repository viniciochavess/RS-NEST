import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvSchema } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService<EnvSchema>= app.get(ConfigService);
  const PORT = configService.get('PORT');
  await app.listen(PORT);
}
bootstrap();
