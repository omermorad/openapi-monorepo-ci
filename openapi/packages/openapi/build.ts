#!/usr/bin/env node

import { createApiSpecFile } from '@openapi/exporter';
import { ApplicationRootModule } from 'server/application-root.module';
import { OpenApiRootModule } from './openapi-root.module';
import { NEXT_OPENAPI_VERSION } from './openapi-versions';

void createApiSpecFile(NEXT_OPENAPI_VERSION, ApplicationRootModule, OpenApiRootModule.nextVersionTargetModule());
