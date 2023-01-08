import { Module } from '@nestjs/common';
import { BalanceOpenApiModule } from '@omermorad/openapi/balance-openapi.module';

@Module({
  imports: [BalanceOpenApiModule]
})
export class ApplicationRootModule {}
