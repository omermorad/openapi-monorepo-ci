import { NestFactory } from '@nestjs/core';
import { ApplicationRootModule } from './application-root.module';

export async function run() {
  const app = await NestFactory.create(ApplicationRootModule);
  app.listen(3000);
}

void run();
