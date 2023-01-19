import { Module } from '@nestjs/common';
import { TransactionModule as TransactionModuleV1 } from './transaction.module';

@Module({
  imports: [TransactionModuleV1]
})
export class OpenApiModuleV1 {}