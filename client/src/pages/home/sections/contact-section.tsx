import { Github, Linkedin, Mail, Phone, Users } from "lucide-react";
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
                  <Mail className="text-primary w-5 h-5" /> Contato Direto
                </h3>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start hover-elevate px-4 h-12" asChild>
                    <a href={`mailto:${siteConfig.email}`}>
                      <Mail className="mr-3 h-5 w-5 text-primary" />{siteConfig.email}
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start hover-elevate px-4 h-12" asChild>
                    <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-3 h-5 w-5 text-primary" />WhatsApp: {siteConfig.phone}
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
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild>
                    <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" /> Falar no WhatsApp
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefere uma conversa mais rápida? Fale comigo diretamente pelo WhatsApp.
                </p>
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full">
                  <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />Conversar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
