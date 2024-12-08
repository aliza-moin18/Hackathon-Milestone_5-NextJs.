import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Top from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const latoFont = localFont({
  src: "/fonts/Lato-Regular.woff",
  variable: "--font-lato",
  weight: "700",
});

const merriweatherFont = localFont({
  src: "/fonts/Merriweather-Regular.woff",
  variable: "--font-merriweather",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Professional Next App",
  description: "Styled with Lato and Merriweather fonts",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${latoFont.variable} ${merriweatherFont.variable} antialiased`}>
        <Top />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};