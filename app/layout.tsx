import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";

import PreLoader from "./components/PreLoader";
import Header from "./components/Header";

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
        <PreLoader>
          <Header />
          <SmoothScroll>{children}</SmoothScroll>
        </PreLoader>
      </body>
    </html>
  );
}
