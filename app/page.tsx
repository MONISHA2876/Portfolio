import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Skills from "@/sections/Skills";
import ProjectSection from "@/sections/ProjectDisplay";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}