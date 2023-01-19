import { Module } from '@nestjs/common';
import { OpenApiRootModule } from '@omermorad/openapi/openapi-root.module';

@Module({
  imports: [OpenApiRootModule]
})
export class ApplicationRootModule {}
