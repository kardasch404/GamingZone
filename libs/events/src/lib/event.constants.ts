export const EVENTS = {
  USER_REGISTERED: 'user.registered',
  USER_VERIFIED: 'user.verified',
  PASSWORD_RESET: 'user.password.reset',

  ORDER_CREATED: 'order.created',
  ORDER_PAID: 'order.paid',
  ORDER_CANCELLED: 'order.cancelled',
  ORDER_COMPLETED: 'order.completed',

  INVENTORY_RESERVED: 'inventory.reserved',
  INVENTORY_RELEASED: 'inventory.released',
  INVENTORY_CONFIRMED: 'inventory.confirmed',
  INVENTORY_RESERVATION_FAILED: 'inventory.reservation.failed',
  INVENTORY_UPDATED: 'inventory.updated',

  PAYMENT_INITIATED: 'payment.initiated',
  PAYMENT_SUCCESS: 'payment.success',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',
} as const;

export const QUEUES = {
  AUTH_QUEUE: 'auth.queue',
  ORDER_QUEUE: 'order.queue',
  INVENTORY_QUEUE: 'inventory.queue',
  PAYMENT_QUEUE: 'payment.queue',
  NOTIFICATION_QUEUE: 'notification.queue',
} as const;

export const EXCHANGES = {
  MAIN_EXCHANGE: 'gamingzone.exchange',
} as const;
