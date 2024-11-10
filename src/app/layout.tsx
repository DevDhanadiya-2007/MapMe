import type { Metadata } from "next";
import "@/styles/globals.css";
import { ChildrenWrapperProps } from "@/types";
import RootLayoutProvider from "@/providers/Root-Provider/RootLayoutProvider";

export const metadata: Metadata = {
  title: "MapMe",
  description: "MapMe",
};

export default function RootLayout({ children }: ChildrenWrapperProps) {
  return (
    <html lang="en">
      <body>
        <RootLayoutProvider>
          {children}
        </RootLayoutProvider>
      </body>
    </html>
  );
}
