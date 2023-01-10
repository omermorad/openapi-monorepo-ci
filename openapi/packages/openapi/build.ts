#!/usr/bin/env node

import { createApiSpecFile } from '@openapi/exporter';
import { ApplicationRootModule } from 'server/application-root.module';
import { version } from './package.json';
import { TransactionModule } from './v1.2/transaction.module';

void createApiSpecFile(version, ApplicationRootModule, TransactionModule);
