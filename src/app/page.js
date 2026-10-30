import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/data/portfolio";
import { hasPublicFile } from "@/lib/assets";

export default function HomePage() {
  const hasPhoto = hasPublicFile(siteConfig.profileImage);
  const hasResume = hasPublicFile(siteConfig.resumePath);

  return (
    <>
      <Hero hasPhoto={hasPhoto} hasResume={hasResume} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
