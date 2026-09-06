import { RevealItem } from "@/components/common/reveal-item";
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {lifestyleImages.map((image, index) => (
              <LifestyleParallax key={image} src={image} index={index} />
            ))}
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
