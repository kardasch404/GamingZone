export interface PaymentInitiatedEvent {
  paymentId: string;
  orderId: string;
  userId: string;
  amount: number;
  currency: string;
  timestamp: Date;
}

export interface PaymentSuccessEvent {
  paymentId: string;
  orderId: string;
  userId: string;
  amount: number;
  transactionId: string;
  timestamp: Date;
}

export interface PaymentFailedEvent {
  paymentId: string;
  orderId: string;
  userId: string;
  amount: number;
  reason: string;
  timestamp: Date;
}

export interface PaymentRefundedEvent {
  paymentId: string;
  orderId: string;
  userId: string;
  amount: number;
  refundId: string;
  timestamp: Date;
}
