export interface OrderItem {
  productId: string;
  sku: string;
  quantity: number;
  price: number;
}

export interface OrderCreatedEvent {
  orderId: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  timestamp: Date;
}

export interface OrderPaidEvent {
  orderId: string;
  userId: string;
  items: OrderItem[];
  paymentId: string;
  timestamp: Date;
}

export interface OrderCancelledEvent {
  orderId: string;
  userId: string;
  items: OrderItem[];
  reason?: string;
  timestamp: Date;
}

export interface OrderCompletedEvent {
  orderId: string;
  userId: string;
  timestamp: Date;
}
