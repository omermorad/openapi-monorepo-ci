#!/usr/bin/env node

import { createApiSpecFile } from '@openapi/exporter';
import { ApplicationRootModule } from 'server/application-root.module';
import { BalanceOpenApiModule } from '@omermorad/openapi/balance-openapi.module';
import { version } from './package.json';

void createApiSpecFile(version, ApplicationRootModule, BalanceOpenApiModule);
