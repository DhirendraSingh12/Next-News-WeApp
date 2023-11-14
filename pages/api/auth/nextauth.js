import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        try {
          const user = await auth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          );
          if (user) {
            return Promise.resolve({ status: 'success', data: user });
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      session.user.email = user.email;
      session.user.uid = user.uid;
      return Promise.resolve(session);
    },
    async jwt(token, user) {
      if (user) {
        token.uid = user.uid;
      }
      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    jwt: true,
  },
});