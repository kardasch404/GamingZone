export interface InventoryReservedEvent {
  orderId: string;
  sku: string;
  quantity: number;
  timestamp: Date;
}

export interface InventoryReleasedEvent {
  orderId: string;
  sku: string;
  quantity: number;
  timestamp: Date;
}

export interface InventoryConfirmedEvent {
  orderId: string;
  items: Array<{ sku: string; quantity: number }>;
  timestamp: Date;
}

export interface InventoryReservationFailedEvent {
  orderId: string;
  sku: string;
  requestedQuantity: number;
  availableQuantity: number;
  timestamp: Date;
}

export interface InventoryUpdatedEvent {
  sku: string;
  availableStock: number;
  reservedStock: number;
  timestamp: Date;
}
