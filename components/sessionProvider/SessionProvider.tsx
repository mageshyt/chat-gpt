"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

export type SessionProviderProps = {
  session: Session | null;
  children: React.ReactNode;
};

export function SessionProvider({ session, children }: SessionProviderProps) {
  return <Provider session={session}>{children}</Provider>;
}
