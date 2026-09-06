import { ChevronRight, Terminal } from "lucide-react";
import { TechnologyIcon } from "@/components/common/technology-icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/types/portfolio";

interface ProjectCaseCardProps {
  project: Project;
}

export function ProjectCaseCard({ project }: ProjectCaseCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 hover-elevate">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <TechnologyIcon
            name={project.stack[0]}
            className="h-6 w-6"
            fallback={<Terminal className="h-5 w-5 text-primary" aria-hidden="true" />}
          />
        </div>
        <div>
          <h3 className="font-semibold transition-colors group-hover:text-primary">{project.title}</h3>
          <span className="text-xs text-muted-foreground">{project.type}</span>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span key={technology} className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
            <TechnologyIcon name={technology} className="h-3.5 w-3.5" />
            {technology}
          </span>
        ))}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="mt-5 w-fit px-0 hover:translate-y-0 hover:shadow-none">
            Ver minha atuação
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <p className="pr-8 text-sm font-medium text-primary">{project.type}</p>
            <DialogTitle className="text-2xl leading-tight">{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <h4 className="mb-2 font-semibold">O que fiz</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.contribution}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span key={technology} className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                <TechnologyIcon name={technology} className="h-3.5 w-3.5" />
                {technology}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
