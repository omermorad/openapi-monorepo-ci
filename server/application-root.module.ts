import { Module } from '@nestjs/common';
import { OpenapiRootModule } from '@omermorad/openapi/balance-openapi.module';

@Module({
  imports: [OpenapiRootModule]
})
export class ApplicationRootModule {}
