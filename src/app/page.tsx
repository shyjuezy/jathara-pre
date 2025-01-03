import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { Gallery } from "@/app/components/gallery";
import { Divider } from "@/app/components/Divider";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
