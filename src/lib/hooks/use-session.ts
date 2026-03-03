'use client';

import { useSession as useNextAuthSession } from 'next-auth/react';

export function useSession() {
  const { data: session, status } = useNextAuthSession();

  return {
    session,
    user: session?.user,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    isAdmin: session?.user?.roles?.some((role) => role.name === 'ADMIN') ?? false,
  };
}
