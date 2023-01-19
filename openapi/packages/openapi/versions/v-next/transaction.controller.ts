import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiParam, ApiProperty } from '@nestjs/swagger'
import { Transaction } from '@omermorad/openapi.types'
import { OpenApiVersion } from '../../openapi-versions';

/**
 * @version next
 */
class TransactionResponseSchema implements Transaction.TransactionResponseSchema {
  @ApiProperty()
  /**
   * @since 1.0
   */
  id: string;

  /**
   * @since next
   */
  token: string;
}

@ApiTags('Transaction')
@Controller({ path: '/transaction', version: OpenApiVersion.Next })
export class TransactionController {
  @Get('/:transactionId')
  @ApiOperation({
    description: 'Returns the details of a transaction entity.',
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
      token: '1234-1234-1234-1234',
      id: 'txn_1ILpBlDI8A3U6F9iCzxTIA37',
    };
  }
}
