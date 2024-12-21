import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { HeroSection } from '@/app/components/HeroSection'
import { AboutSection } from '@/app/components/AboutSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />

      </main>
      <Footer />
    </div>
  )
}
