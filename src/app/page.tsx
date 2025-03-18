import { Header } from "@/components/header/header";
import { About } from "../components/sections/about";
import { HeroSection } from "../components/sections/hero-section/hero-section";
import { Portfolio } from "../components/sections/portfolio";
import { Skills } from "../components/sections/skills";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="h-screen snap-y overflow-y-auto snap-mandatory">
        <HeroSection />

        <div id="about" className="snap-center">
          <About />
        </div>

        <div id="skills" className="snap-center">
          <Skills />
        </div>

        <div id="portfolio" className="snap-center">
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
