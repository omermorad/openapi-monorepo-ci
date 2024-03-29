import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiParam, ApiProperty } from '@nestjs/swagger'
import { Transaction } from '@omermorad/openapi.types'
import { OpenApiVersion } from '../../../openapi-versions';

class TransactionResponseSchema implements Transaction.TransactionResponseSchema {
  @ApiProperty()
  id: string;
}

@ApiTags('Transaction')
@Controller({ path: '/transaction', version: OpenApiVersion.V1_0 })
export class TransactionController {
  @Get('/:transactionId')
  @ApiOperation({
    description: 'Returns the details of a transaction entity and something else.',
    operationId: 'transaction.crud.get-transaction',
  })
  @ApiParam({
    name: 'transactionId',
    required: true,
    description: 'ID of the transaction entity.',
  })
  @ApiOkResponse({ description: 'Transaction has been found', type: TransactionResponseSchema })
  public getTransaction(@Param('transactionId') transactionPublicId: string): TransactionResponseSchema {
    return {
      id: 'txn_1ILpBlDI8A3U6F9iCzxTIA37',
    };
  }
}
