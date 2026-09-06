import { RevealItem } from "@/components/common/reveal-item";
import { projects } from "@/data/portfolio";
import { ProjectCaseCard } from "@/features/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6" data-testid="section-projetos">
      <div className="max-w-6xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Projetos que viraram <span className="text-gradient">soluções reais</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Uma amostra dos desafios que já transformei em software.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <RevealItem key={project.title} delay={index * 0.1} className="h-full">
                <ProjectCaseCard project={project} />
              </RevealItem>
            ))}
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
