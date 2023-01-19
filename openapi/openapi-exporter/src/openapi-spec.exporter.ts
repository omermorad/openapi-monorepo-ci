import { OpenApiVersion } from '@omermorad/openapi/openapi-versions';
import fs, { existsSync, writeFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const FOLDER_NAME = 'dist';

export async function createApiSpecFile(targetVersion: OpenApiVersion, rootModule: any, targetModule: any) {
  console.log('Exporting OpenAPI spec file for API version', targetVersion, 'it might take a while..');
  console.log('Bootstrapping application..');

  const app = await NestFactory.create(rootModule, { logger: false });

  if (!existsSync(FOLDER_NAME)) {
    fs.mkdirSync(FOLDER_NAME);
  }

  console.log('Scanning modules..');

  const document = SwaggerModule.createDocument(
    app.enableVersioning({
      type: VersioningType.HEADER,
      defaultVersion: targetVersion,
      header: 'v',
    }),
    new DocumentBuilder()
      .setVersion(targetVersion)
      .setTitle('Balance OpenAPI')
      .addServer('https://api.sandbox.getbalance.com', 'Sandbox')
      .addServer('https://api.getbalance.com', 'Production')
      .build(),
    {
      deepScanRoutes: true,
      include: [targetModule],
    },
  );

  const specPath = `${FOLDER_NAME}/openapi.json`;
  writeFileSync(specPath, JSON.stringify(document));

  console.log('Done.');
  process.exit(0);
}
