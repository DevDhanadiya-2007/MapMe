import type { Metadata } from "next";
import "@/styles/globals.css";
import ChakraProviderWrapper from "@/providers/ChakraProviderWrapper";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

export const metadata: Metadata = {
  title: "MapMe",
  description: "MapMe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <ChakraProviderWrapper>
            {children}
          </ChakraProviderWrapper>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
