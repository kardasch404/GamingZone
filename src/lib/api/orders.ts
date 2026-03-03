import { apiClient } from './client';
import type { Order, PaginatedResponse } from '@/types';

export const ordersAPI = {
  getAll: async (page = 1, limit = 10) => {
    const { data } = await apiClient.get<PaginatedResponse<Order>>('/api/v1/orders', {
      params: { page, limit },
    });
    return data;
  },

  getById: async (id: string) => {
    const { data } = await apiClient.get<Order>(`/api/v1/orders/${id}`);
    return data;
  },

  create: async (orderData: { items: { productId: string; quantity: number }[] }) => {
    const { data } = await apiClient.post<Order>('/api/v1/orders', orderData);
    return data;
  },

  cancel: async (id: string) => {
    const { data } = await apiClient.patch<Order>(`/api/v1/orders/${id}/cancel`);
    return data;
  },
};
