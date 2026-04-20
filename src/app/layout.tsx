import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/navbar";
import localFont from "next/font/local";
import Footer from '@/components/common/footer'
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomBlur from "@/components/common/bottomBlur";
import { ReactLenis } from "@/lib/lenis"
import { Toaster } from 'sonner';

const helvetica = localFont({
  src: "../../public/Assests/Fonts/Helovatica.woff2",
  variable: "--font-sans",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drydash",
  description: "DryDash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, helvetica.variable, "font-sans")}
    >
      <ReactLenis root>
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <Navbar />
          {children}
          <BottomBlur />
          <Footer />
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
