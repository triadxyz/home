import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Triad Fi",
  description:
    "We tokenize Solana projects, a new way to invest in the ecosystem!",
  icons: [
    {
      url: "/favicon/favicon.ico",
      href: "/favicon//favicon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon/apple-touch-icon.png",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-32x32.png",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-16x16.png",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon/site.webmanifest",
      href: "/favicon/site.webmanifest",
      rel: "manifest",
    },
  ],
};

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
