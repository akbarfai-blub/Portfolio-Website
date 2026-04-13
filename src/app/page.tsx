import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-light dark:bg-base-dark font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
