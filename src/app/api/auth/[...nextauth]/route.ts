import { AuthError } from "@/errors/auth-error";
import { login } from "@/lib/auth";
import NextAuth from "next-auth";
import CrdentialProvider from "next-auth/providers/credentials";

/**
 * Auth handler
 */
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    maxAge: 1 * 60 * 60,
  },
  providers: [
    CrdentialProvider({
      name: "Signin",
      credentials: {
        email: { type: "email", label: "Email id", placeholder: "Enter email id" },
        password: { type: "password", label: "Password", placeholder: "******" },
      },
      async authorize(credentials, req) {
        const data = await login({
          email: credentials?.email!,
          password: credentials?.password!,
        });

        if (data?.errors) {
          throw new AuthError(data.errors.message);
        }

        if (data) {
          return data;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("user", token);
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST, handler as AuthHandler };
