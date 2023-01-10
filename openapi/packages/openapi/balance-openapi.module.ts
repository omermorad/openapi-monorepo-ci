import { Module } from '@nestjs/common';
import { TransactionModule as TransactionModuleV1 } from './v1.0/transaction.module';
// import { TransactionModule as TransactionModuleV1_1 } from './v1.1/transaction.module';

@Module({
  imports: [TransactionModuleV1]
})
export class BalanceOpenApiModule {}
