import { RevealItem } from "@/components/common/reveal-item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { lifestyleImages } from "@/data/portfolio";
import { LifestyleParallax } from "@/pages/home/components/lifestyle-parallax";

export function LifestyleSection() {
  return (
    <section className="py-20 px-6" data-testid="section-lifestyle">
      <div className="max-w-6xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Minha jornada <span className="text-gradient">além do código</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Uma carreira também se constrói com experiências, boas conexões e aprendizado contínuo. Estes são alguns registros do caminho que percorro dentro e fora da tecnologia.
          </p>
          <ScrollArea className="w-full" aria-label="Galeria de registros da minha jornada">
            <div className="flex w-max gap-4 pb-4">
              {lifestyleImages.map((image, index) => (
                <LifestyleParallax key={image} src={image} index={index} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </RevealItem>
      </div>
    </section>
  );
}
