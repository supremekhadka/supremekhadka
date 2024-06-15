import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Loader from "./components/Loader";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={spaceMono.className}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
