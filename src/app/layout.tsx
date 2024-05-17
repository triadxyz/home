import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import { Suspense } from "react";
import Header from "@/components/header";

export const metadata = {
  title: "Triad Fi",
  description:
    "Predict the Success or Failure of the Ecosystem.",
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
      <body suppressHydrationWarning={false} className={cn(inter.className)}>
        <Header />
        <Suspense>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
