import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Skills from "@/sections/Skills";
import ProjectSection from "@/sections/ProjectDisplay";

export default function Home() {
  return (
    <div>
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}