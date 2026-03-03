import 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      name: string;
      roles?: { name: string }[];
    };
  }

  interface User {
    accessToken?: string;
    refreshToken?: string;
    roles?: { name: string }[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    roles?: { name: string }[];
  }
}
