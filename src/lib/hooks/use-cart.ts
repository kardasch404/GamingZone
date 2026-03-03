import { useCartStore } from '@/lib/store/cart-store';
import type { Product } from '@/types';

export function useCart() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const addToCart = (product: Product, quantity = 1) => {
    addItem(product, quantity);
  };

  const removeFromCart = (sku: string) => {
    removeItem(sku);
  };

  const updateItemQuantity = (sku: string, quantity: number) => {
    updateQuantity(sku, quantity);
  };

  return {
    items,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    totalItems: getTotalItems(),
    totalPrice: getTotalPrice(),
  };
}
