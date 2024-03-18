import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import ChatBot from "./_components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-poppins ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <div className="fixed bottom-0 right-0 m-4">
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
