#!/usr/bin/env node

import fs, { existsSync } from 'fs';
import { version as PACKAGE_VERSION } from './package.json';

type BalanceApiVersions = Record<'V1' | 'V1_0_1', string>;

export const OpenApiVersion: BalanceApiVersions = {
  V1: '1.0.0',
  V1_0_1: '1.1.0',
};

export type OpenApiVersion = typeof OpenApiVersion[keyof typeof OpenApiVersion];

const FOLDER_NAME = 'dist';

async function createApiSpecFile(version: string) {
  const [baseVersion] = version.split('-');

  if (!Object.values(OpenApiVersion).includes(baseVersion)) {
    console.error(
      'Invalid version number for OpenAPI spec file, allowed versions are:',
      Object.values(OpenApiVersion).join(', '),
    );

    process.exit(1);
  }

  console.log('Exporting OpenAPI spec file for version', version, 'it might take a while..');

  // const app = await NestFactory.create(ApplicationRootModule, { logger: false });

  if (!existsSync(FOLDER_NAME)) {
    fs.mkdirSync(FOLDER_NAME);
  }

  // const document = SwaggerModule.createDocument(
  //   app.enableVersioning({
  //     type: VersioningType.HEADER,
  //     defaultVersion: version,
  //     header: 'v',
  //   }),
  //   new DocumentBuilder()
  //     .setVersion(version)
  //     .setTitle('Balance OpenAPI')
  //     .addServer('https://api.sandbox.getbalance.com', 'sandbox')
  //     .addServer('https://api.getbalance.com', 'production')
  //     .build(),
  //   {
  //     deepScanRoutes: true,
  //     include: [BalanceOpenApiModule],
  //   },
  // );

  const specPath = `${FOLDER_NAME}/v${version}-openapi.spec.json`;
  fs.writeFileSync(specPath, JSON.stringify([]));

  console.log('Done exporting OpenAPI spec file. Saved under:', specPath);
  process.exit(0);
}

void createApiSpecFile(PACKAGE_VERSION);
