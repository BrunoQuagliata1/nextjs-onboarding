"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import ChatBot from "./_components/chatbot";
import { MobileNavbarFooter } from "./_components/footer";
import { MobileNavbar } from "./_components/navbar";
import { usePathname } from "next/navigation";

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
    // Check if pathname starts with /search/ and has more segments after /search/
    return pathname.startsWith("/search/") && pathname.split("/").length > 2;
  };

  return (
    <html lang="en">
      <body className={`font-poppins ${inter.variable}`}>
        <div className="block sm:hidden">
          {pathname == "/search" ? (
            <MobileNavbar variant="search" />
          ) : (
            <MobileNavbar variant="default" />
          )}
        </div>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <div className="fixed bottom-0 right-0 m-4 hidden sm:block">
          {isDynamicSearchPath(pathname) ? null : <ChatBot />}
        </div>
        <div className="block sm:hidden">
          <MobileNavbarFooter />
        </div>
      </body>
    </html>
  );
}
