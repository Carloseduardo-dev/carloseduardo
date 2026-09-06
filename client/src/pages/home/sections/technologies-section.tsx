import { RevealItem } from "@/components/common/reveal-item";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { technologies } from "@/data/portfolio";

function TechnologyLogo({ name, icon, duplicate = false }: { name: string; icon: string; duplicate?: boolean }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex h-20 w-20 shrink-0 items-center justify-center p-3 transition-transform duration-300 hover:scale-110">
          <img src={icon} alt={duplicate ? "" : name} className="h-full w-full object-contain" aria-hidden={duplicate} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

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
          <div className="technologies-marquee" aria-label="Tecnologias e ferramentas utilizadas">
            <div className="technologies-marquee-track flex w-max items-center">
              <div className="flex shrink-0 items-center gap-8 px-4">
                {technologies.map((technology) => (
                  <TechnologyLogo key={technology.name} {...technology} />
                ))}
              </div>
              <div className="flex shrink-0 items-center gap-8 px-4" aria-hidden="true">
                {technologies.map((technology) => (
                  <TechnologyLogo key={`${technology.name}-duplicate`} {...technology} duplicate />
                ))}
              </div>
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
