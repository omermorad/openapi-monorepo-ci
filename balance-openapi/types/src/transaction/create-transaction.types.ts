// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Transaction {
  export interface FinancingConfig {
    financingNetAmount?: number;
    financingNetDays?: number;
    financingNetDaysOptions?: number[];
    factoringFee?: number;
  }

  export enum TaxMeasurement {
    RELATIVE = 'relative',
    FIXED = 'fixed',
  }

  export interface LineItemRequest {
    itemType: string;
    price: number;
    productId: string;
    productSku: string;
    quantity: number;
    tax: number;
    taxMeasurement: TaxMeasurement;
    title: string;
    variationId: string;
  }

  export interface StatementDescriptor {
    change: string;
  }

  export enum TransactionInvoiceSource {
    BALANCE = 'balance',
    EXTERNAL = 'external',
  }

  export enum PlanType {
    MILESTONE = 'milestones',
    INSTALLMENT = 'installments',
    INVOICE = 'invoice',
    RECURRING = 'recurring',
  }

  export interface CommunicationConfig {
    emailTo?: string[];
    emailsCc?: string[];
  }

  export interface TransactionPlan {
    chargeDate: Date;
    installments: number;
    planType: PlanType;
  }

  export enum PaymentMethod {
    CREDIT_CARD = 'creditCard',
    BANK = 'bank',
    WIRE = 'wire',
    SEPA_CREDIT = 'sepaCredit',
    CHECK = 'check',
    PAY_WITH_TERMS = 'payWithTerms',
    INVOICE = 'invoice',
    PADS = 'pads',
    PAY_SUPPLIER = 'paySupplier',
    ACH_CREDIT = 'achCredit',
    ACH_DEBIT = 'achDebit',
    OUT_OF_PLATFORM = 'outOfPlatform',
  }

  export interface AddressRequest {
    addressLine1: string;
    addressLine2: string;
    city: string;
    countryCode: string;
    state: string;
    zipCode: string;
  }

  export interface TransactionBuyerSchema {
    billingAddress: AddressRequest;
    businessName: string;
    businessUrl: string;
    communicationConfig: CommunicationConfig;
    createdAt: Date;
    draft: boolean;
    email: string;
    externalReferenceId: string;
    firstName: string;
    id: string;
    isRegistered: boolean;
    lastName: string;
    phone: string;
    qualificationStatus: string;
  }

  export interface LineRequest {
    discount: number;
    lineItems: LineItemRequest[];
    marketplaceFixedTake: number;
    marketplacePercentageTake: number;
    shippingPrice: number;
    tax: number;
    vendorId: string;
  }

  export interface CreateTransactionRequestSchema {
    allowedPaymentMethods: PaymentMethod[];
    allowedTermsPaymentMethods: PaymentMethod[];
    authAmount: number;
    autoPayouts: boolean;
    billingAddress: AddressRequest;
    buyer: TransactionBuyerSchema;
    communicationConfig: CommunicationConfig;
    currency: string;
    externalReferenceId: string;
    financingConfig: FinancingConfig;
    invoiceSource: TransactionInvoiceSource;
    lines: LineRequest[];
    marketplaceFixedTake: number;
    marketplacePercentageTake: number;
    notes: string;
    plan: TransactionPlan;
    shippingAddress: AddressRequest;
    statementDescriptor: StatementDescriptor;
    totalDiscount: number;
  }
}
