import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        password: {
          label: 'Hasło dostępowe otrzymane w mailu',
          type: 'password',
          placeholder: 'Hasło dostępowe',
        },
      },
      authorize: async credentials => {
        const { password } = credentials;
        console.log(password);
        if (password !== process.env.PAGE_PASSWORD) {
          throw new Error('Nieprawidłowe hasło dostępowe');
        }
        return {};
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
    signIn: '/login',
  },
});
