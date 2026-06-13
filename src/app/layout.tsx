import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { SpaceModeProvider } from "@/components/SpaceModeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnav B. Singh - Software Engineer",
  description: "Portfolio of Arnav B. Singh, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-white text-black transition-colors duration-300 antialiased`}>
        <SpaceModeProvider>
          <Navbar />
          {children}
        </SpaceModeProvider>
      </body>
    </html>
  );
}
