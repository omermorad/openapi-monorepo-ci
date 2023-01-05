#!/usr/bin/env node

import fs, { existsSync } from 'fs';
import { OpenApiVersion } from '@omermorad/openapi.versions'
import { version as PACKAGE_VERSION } from '../package.json';

const FOLDER_NAME = 'dist';

async function createApiSpecFile(version: string) {
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

  if (!existsSync(FOLDER_NAME)) {
    fs.mkdirSync(FOLDER_NAME);
  }

  const specPath = `${FOLDER_NAME}/openapi.json`;
  fs.copyFileSync('./openapi.json', specPath);

  console.log('Done exporting OpenAPI spec file. Saved under:', specPath);
  process.exit(0);
}

void createApiSpecFile(PACKAGE_VERSION);
