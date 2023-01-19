import { Module } from '@nestjs/common';
import { OpenApiRootModule } from '../openapi/packages/openapi/openapi-root.module'

@Module({
  imports: [OpenApiRootModule]
})
export class ApplicationRootModule {}
