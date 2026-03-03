import { apiClient } from './client';
import type { Product, ProductFilters, PaginatedResponse } from '@/types';

export const productsAPI = {
  getAll: async (filters: ProductFilters) => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>('/api/v1/products', {
      params: filters,
    });
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await apiClient.get<Product>(`/api/v1/products/${slug}`);
    return data;
  },

  search: async (query: string, filters: ProductFilters) => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>('/api/v1/search', {
      params: { q: query, ...filters },
    });
    return data;
  },

  create: async (product: Partial<Product>) => {
    const { data } = await apiClient.post<Product>('/api/v1/products', product);
    return data;
  },

  update: async (id: string, product: Partial<Product>) => {
    const { data } = await apiClient.put<Product>(`/api/v1/products/${id}`, product);
    return data;
  },

  delete: async (id: string) => {
    const { data } = await apiClient.delete(`/api/v1/products/${id}`);
    return data;
  },
};
