import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArticleModule } from './article/article.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
