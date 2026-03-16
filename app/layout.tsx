import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zarein Energy",
  description: "From Wellhead to Grid — Zarein Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
