import fs, { existsSync, writeFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { OpenApiVersion } from '@openapi/versions'

const FOLDER_NAME = 'dist';

export async function createApiSpecFile(version: OpenApiVersion, rootModule: any, targetModule: any) {
  const [baseVersion] = version.split('-');

  if (!Object.values(OpenApiVersion).includes(baseVersion)) {
    console.error(
      'Invalid version number for OpenAPI spec file.',
      `got '${baseVersion}',`,
      'but only the following versions are allowed:',
      Object.values(OpenApiVersion).join(', '),
    );

    process.exit(1);
  }

  console.log('Exporting OpenAPI spec file for version', version, 'it might take a while..');

  const app = await NestFactory.create(rootModule, { logger: false });

  if (!existsSync(FOLDER_NAME)) {
    fs.mkdirSync(FOLDER_NAME);
  }

  const document = SwaggerModule.createDocument(
    app.enableVersioning({
      type: VersioningType.HEADER,
      defaultVersion: version,
      header: 'v',
    }),
    new DocumentBuilder()
      .setVersion(version)
      .setTitle('Balance OpenAPI')
      .addServer('https://api.sandbox.getbalance.com', 'sandbox')
      .addServer('https://api.getbalance.com', 'production')
      .build(),
    {
      deepScanRoutes: true,
      include: [targetModule],
    },
  );

  const specPath = `${FOLDER_NAME}/openapi.json`;
  writeFileSync(specPath, JSON.stringify(document));

  console.log('Done exporting OpenAPI spec file. Saved under:', specPath);
  process.exit(0);
}
