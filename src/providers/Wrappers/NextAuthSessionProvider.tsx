"use client"
import { ChildrenWrapperProps } from "@/types";
import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ children }: ChildrenWrapperProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}