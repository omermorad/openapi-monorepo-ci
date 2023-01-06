import { Controller, Get } from '@nestjs/common';
import { Transaction } from '@omermorad/openapi.types'
import { OpenApiVersion } from '@openapi/versions';

@Controller({ path: '/transaction', version: OpenApiVersion.V1 })
export class TransactionController {
  @Get()
  public getTransaction(): Transaction.TransactionResponseSchema {
    return {
      id: 'something-with-id',
    };
  }
}
