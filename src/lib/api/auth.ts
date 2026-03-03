import { apiClient } from './client';
import type { AuthResponse, User } from '@/types';

export const authAPI = {
  login: async (email: string, password: string) => {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', {
      email,
      password,
    });
    return data;
  },

  register: async (email: string, password: string, name: string) => {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/register', {
      email,
      password,
      name,
    });
    return data;
  },

  logout: async () => {
    const { data } = await apiClient.post('/api/auth/logout');
    return data;
  },

  getProfile: async () => {
    const { data } = await apiClient.get<User>('/api/auth/profile');
    return data;
  },

  refresh: async (refreshToken: string) => {
    const { data } = await apiClient.post<{ accessToken: string }>('/api/auth/refresh', {
      refreshToken,
    });
    return data;
  },
};
