import { Code2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealItem } from "@/components/common/reveal-item";
import { ProfileParallax } from "@/pages/home/components/profile-parallax";
import profileImage from "@/assets/profile/perfil.png";

export function HeroSection() {
  return (
    <section className="pt-20 pb-20 px-6" data-testid="section-hero">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <RevealItem className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Disponível
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Carlos Eduardo
              <br />
              <span className="text-gradient">Ferreira</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium" data-testid="hero-subtitle">
              Software Engineer | Computer Science
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              Rio de Janeiro, Brasil
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full" data-testid="hero-cta-contato">
                <a href="#contato"><Mail className="w-5 h-5 mr-2" />Entrar em contato</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary rounded-full" data-testid="hero-cta-projetos">
                <a href="#projetos"><Code2 className="w-5 h-5 mr-2" />Ver projetos</a>
              </Button>
            </div>
          </RevealItem>
          <RevealItem delay={0.2} className="relative">
            <ProfileParallax src={profileImage} />
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-xs text-muted-foreground">Experiência em</p>
                  <p className="text-sm font-semibold">Startups</p>
                </div>
              </div>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
