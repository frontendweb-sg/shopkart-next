import { AuthError } from "@/errors/auth-error";
import { login } from "@/lib/auth";
import axios from "axios";
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
        const { email, password } = credentials as { email: string; password: string };
        const response = await fetch(process.env.NEXTAUTH_URL + "/api/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await response.json();

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
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = token as any;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
