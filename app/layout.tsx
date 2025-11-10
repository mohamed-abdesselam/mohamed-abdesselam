import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/scrollUp/ScrollUp";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Mohamed Portfolio",
  description: "Portfolio website of Mohamed Abdesselam - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className={poppins.variable} suppressHydrationWarning>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
