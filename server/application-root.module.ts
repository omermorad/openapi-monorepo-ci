import { OpenApiRootModule } from '../openapi/packages/openapi/openapi-root.module'
import { Module } from '@nestjs/common';

@Module({
  imports: [OpenApiRootModule]
})
export class ApplicationRootModule {}
