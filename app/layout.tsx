import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from "next/link";

export const metadata: Metadata = {
  title: "AidHd",
  description: "AI-powered health insurance recommendation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-slate-900 text-white p-4">
          <nav className="container mx-auto flex gap-4">
            <Link href="/" className="hover:text-blue-300">
              Home (Portal)
            </Link>
            <Link href="/admin" className="hover:text-blue-300">
              Admin
            </Link>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
