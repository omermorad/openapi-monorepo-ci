import { Module } from '@nestjs/common';
import { TransactionModule as TransactionModule } from './transaction.module';

@Module({
  imports: [TransactionModule]
})
export class OpenApiModuleV1 {}
