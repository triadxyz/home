import { Footer } from "@/components/footer";


export default function HomeLayout({children}: {children: React.ReactNode}) {
 return (
  <div className="h-full w-full">
    {children}
    <Footer />
  </div>
 )
}