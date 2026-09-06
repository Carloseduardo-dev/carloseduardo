import { RevealItem } from "@/components/common/reveal-item";
import { aboutHighlights } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6" data-testid="section-sobre">
      <div className="max-w-6xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p data-testid="sobre-texto-1">
                Olá, me chamo <strong className="text-foreground">Carlos Eduardo</strong>, Software Engineer com experiência em startups e sistemas em produção. Atuo na construção e evolução de produtos digitais, de aplicações web e APIs a aplicativos, integrações e automações. Escolho tecnologias de acordo com o contexto de cada produto, com foco em soluções confiáveis, seguras e fáceis de manter.
              </p>
              <p data-testid="sobre-texto-2">
                Já participei da construção de sistemas de pagamento, soluções de armazenamento com AWS S3, dashboards analíticos, automações e integrações com APIs usadas em produtos reais.
              </p>
              <p data-testid="sobre-texto-3">
                Em equipe, valorizo comunicação clara, colaboração e boas práticas. Meu objetivo é entregar código que resolva o problema do negócio hoje sem dificultar a evolução do produto amanhã.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutHighlights.map((item, index) => (
                <RevealItem key={item.label} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-4 hover-elevate h-full">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
