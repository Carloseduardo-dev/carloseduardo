import { ExternalLink, Terminal } from "lucide-react";
import { RevealItem } from "@/components/common/reveal-item";
import { projects } from "@/data/portfolio";

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
              <RevealItem key={project.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover-elevate group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                        <span className="text-xs text-muted-foreground">{project.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">{technology}</span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
