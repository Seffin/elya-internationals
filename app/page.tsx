import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Products } from "@/components/Products"
import { Features } from "@/components/Features"
import { Markets } from "@/components/Markets"
import { Process } from "@/components/Process"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { About } from "@/components/About"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Products />
        <Features />
        <Markets />
        <Process />
        <About  />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

