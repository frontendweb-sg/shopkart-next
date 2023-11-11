"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppProvider from "./App";

const AuthProvider = ({ children, session }: { children: ReactNode; session: Session }) => {
  return (
    <SessionProvider session={session}>
      <AppProvider>{children}</AppProvider>
    </SessionProvider>
  );
};
export default AuthProvider;
