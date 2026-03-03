import { apiClient } from './client';
import type { CartItem } from '@/types';

export const cartAPI = {
  getCart: async () => {
    const { data } = await apiClient.get<{ items: CartItem[] }>('/api/v1/cart');
    return data;
  },

  addItem: async (productId: string, quantity: number) => {
    const { data } = await apiClient.post<{ items: CartItem[] }>('/api/v1/cart/items', {
      productId,
      quantity,
    });
    return data;
  },

  updateItem: async (sku: string, quantity: number) => {
    const { data } = await apiClient.put<{ items: CartItem[] }>(`/api/v1/cart/items/${sku}`, {
      quantity,
    });
    return data;
  },

  removeItem: async (sku: string) => {
    const { data } = await apiClient.delete(`/api/v1/cart/items/${sku}`);
    return data;
  },

  clearCart: async () => {
    const { data } = await apiClient.delete('/api/v1/cart');
    return data;
  },
};
