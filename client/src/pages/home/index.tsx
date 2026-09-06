import { AboutSection } from "@/pages/home/sections/about-section";
import { ContactSection } from "@/pages/home/sections/contact-section";
import { GitHubSection } from "@/pages/home/sections/github-section";
import { HeroSection } from "@/pages/home/sections/hero-section";
import { LifestyleSection } from "@/pages/home/sections/lifestyle-section";
import { PageFooter } from "@/pages/home/sections/page-footer";
import { ProjectsSection } from "@/pages/home/sections/projects-section";
import { TechnologiesSection } from "@/pages/home/sections/technologies-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <GitHubSection />
      <LifestyleSection />
      <ContactSection />
      <PageFooter />
    </div>
  );
}
