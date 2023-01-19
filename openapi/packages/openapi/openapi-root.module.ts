import { Module } from '@nestjs/common';
import { OpenApiVersion } from './openapi-versions';
import { OpenApiModuleVersionNext } from './versions/v-next/openapi-next.module';
import { OpenApiModuleV1 } from './versions/v1/v1.0/openapi.module';

const API_VERSIONS_TO_MODULES: Record<OpenApiVersion, any> = {
  [OpenApiVersion.V1_0]: OpenApiModuleV1,
  [OpenApiVersion.Next]: OpenApiModuleVersionNext,
};

@Module({ imports: [Object.values(API_VERSIONS_TO_MODULES)] })
export class OpenApiRootModule {
  public static nextVersionTargetModule() {
    return API_VERSIONS_TO_MODULES[OpenApiVersion.Next];
  }
}
