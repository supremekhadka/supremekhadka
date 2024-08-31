import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";

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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
