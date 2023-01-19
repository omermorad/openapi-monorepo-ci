import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [TransactionController]
})
export class OpenApiModuleVersionNext {}
