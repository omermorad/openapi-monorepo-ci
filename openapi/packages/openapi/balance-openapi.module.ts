import { Module } from '@nestjs/common';
import { TransactionModule as TransactionModuleV1 } from './v1.0/transaction.module';

@Module({
  imports: [TransactionModuleV1]
})
export class BalanceOpenApiModule {}
