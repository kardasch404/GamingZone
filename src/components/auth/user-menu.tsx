'use client';

import { signOut } from 'next-auth/react';
import { useSession } from '@/lib/hooks/use-session';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function UserMenu() {
  const { user, isAuthenticated } = useSession();

  if (!isAuthenticated) {
    return (
      <div className="flex gap-2">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700">Hello, {user?.name}</span>
      <Button onClick={() => signOut({ callbackUrl: '/' })}>Logout</Button>
    </div>
  );
}
