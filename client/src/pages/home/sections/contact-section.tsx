import { Users } from "lucide-react";
import githubIcon from "@/assets/tech/GitHub.svg";
import linkedInIcon from "@/assets/tech/LinkedIn.svg";
import emailIcon from "@/assets/social/email.svg";
import instagramIcon from "@/assets/social/instagram.svg";
import { RevealItem } from "@/components/common/reveal-item";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/features/contact/components/contact-form";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6" data-testid="section-contato">
      <div className="max-w-4xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Vamos construir algo <span className="text-gradient">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Se você procura um desenvolvedor de software para seu time ou tem um projeto em mente que precisa sair do papel, conte-me sobre o desafio.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <img src={emailIcon} alt="" className="h-5 w-5 object-contain dark:invert" /> Contato Direto
                </h3>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start hover-elevate px-4 h-12" asChild>
                    <a href={`mailto:${siteConfig.email}`}>
                      <img src={emailIcon} alt="" className="mr-3 h-5 w-5 object-contain dark:invert" />{siteConfig.email}
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Users className="text-primary w-5 h-5" /> Redes Sociais
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild>
                    <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil no GitHub">
                      <img src={githubIcon} alt="" className="h-5 w-5 object-contain dark:invert" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild>
                    <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn">
                      <img src={linkedInIcon} alt="" className="h-5 w-5 object-contain" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild>
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil no Instagram">
                      <img src={instagramIcon} alt="" className="h-5 w-5 object-contain" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
