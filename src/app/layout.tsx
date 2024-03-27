"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import { TRPCReactProvider } from "~/trpc/react";
import ChatBot from "./_components/chatbot";
import Footer from "./_components/footer";
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
        <div className="fixed bottom-0 right-0 z-20 m-4 hidden sm:block">
          <ChatBot />
        </div>
        <div className="block sm:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
