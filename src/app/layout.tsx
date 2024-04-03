import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navigation from "./components/Navigation";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Chat App",
  description: "A simple video chat app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <UserProvider>
          <Navigation />
          <div className="pt-14 px-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
