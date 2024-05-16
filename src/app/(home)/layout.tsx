import { Footer } from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <NextTopLoader
        color="#3961FB"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #3961FB,0 0 5px #3961FB"
      />
      {children}
      <Footer />
    </div>
  );
}
