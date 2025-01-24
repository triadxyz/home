"use client";

import { Footer } from "@/components/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-[#13141A1A]">
      <div className="w-full h-full pb-32">{children}</div>
      <Footer />
    </div>
  );
}
