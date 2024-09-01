import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";

import Navbar from "./components/Navbar";

const neueRegrade = localFont({
  src: "../public/assets/fonts/Neue Regrade Variable.ttf",
});

export const metadata: Metadata = {
  title: "Supreme Khadka",
  description: "Supreme's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueRegrade.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
