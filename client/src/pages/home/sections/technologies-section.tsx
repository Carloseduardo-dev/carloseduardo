import { RevealItem } from "@/components/common/reveal-item";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { technologies } from "@/data/portfolio";

export function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-20 px-6" data-testid="section-tecnologias">
      <div className="max-w-6xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Tecnologias & <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Algumas das tecnologias que utilizo para tirar soluções do papel e sustentá-las em produção. A escolha depende do contexto e dos objetivos de cada produto.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {technologies.map((technology, index) => (
              <RevealItem key={technology.name} delay={index * 0.05}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center hover-elevate transition-all aspect-square grayscale hover:grayscale-0">
                      <img src={technology.icon} alt={technology.name} className="w-12 h-12 mb-2 object-contain" />
                      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{technology.name}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent><p>{technology.name}</p></TooltipContent>
                </Tooltip>
              </RevealItem>
            ))}
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
