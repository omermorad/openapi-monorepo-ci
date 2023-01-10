#!/usr/bin/env node

import { createApiSpecFile } from '@openapi/exporter';
import { ApplicationRootModule } from 'server/application-root.module';
import { version } from './package.json';
import { TransactionModule as TransactionModuleV1_1 } from './v1.1/transaction.module';

void createApiSpecFile(version, ApplicationRootModule, TransactionModuleV1_1);
