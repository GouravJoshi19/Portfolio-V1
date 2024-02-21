import { AboutSection } from "@/components/about/AboutSection";
import ContactComponent from "@/components/contact/ContactComponent";
import { HeroSection } from "@/components/home/HeroSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <div id="home" className="flex flex-row justify-center w-full bg-[#F9F9F9]">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="project">
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactComponent />
      </div>
    </main>
  )
}