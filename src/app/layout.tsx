"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import { TRPCReactProvider } from "~/trpc/react";

import ChatBot from "./_components/chatbot";
import { MobileFooter } from "./_components/footer";
import { MobileNavbar } from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDynamicSearchPath = (pathname: string) => {
    return pathname.startsWith("/search/") && pathname.split("/").length > 2;
  };

  return (
    <html lang="en">
      <body className={`font-poppins ${inter.variable}`}>
        <div className="block sm:hidden">
          {isDynamicSearchPath(pathname) ? null : (
            <MobileNavbar
              variant={pathname === "/search" ? "search" : "default"}
            />
          )}
        </div>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <div className="fixed bottom-0 right-0 z-20 m-4 hidden sm:block">
          {isDynamicSearchPath(pathname) ? null : <ChatBot />}
        </div>
        <div className="block sm:hidden">
          <MobileFooter />
        </div>
      </body>
    </html>
  );
}
