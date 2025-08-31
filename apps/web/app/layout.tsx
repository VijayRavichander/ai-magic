import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import FloatingNavBar from "@/components/global/navBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Magic AI",
  description: "Magic AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt:10 flex max-w-[1400px] flex-col items-center justify-center gap-4 p-5 md:mx-auto md:gap-5 md:p-5 md:pt-12 bg-black/95 text-white`}
      >
        <FloatingNavBar />

        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
