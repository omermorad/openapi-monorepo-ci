import { Module } from '@nestjs/common';
import { TransactionModule } from './v1/transaction.module';

@Module({
  imports: [TransactionModule]
})
export class BalanceOpenApiModule {}
