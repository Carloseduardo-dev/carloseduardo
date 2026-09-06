import { useMemo } from "react";
import { Code2, GitPullRequest, MessageSquareCode } from "lucide-react";
import { formatPercentage } from "@/features/github/lib/format-percentage";
import type { GitHubStats } from "@/features/github/model/github-stats";

export function LanguagesOverview({ stats }: { stats: GitHubStats }) {
  const segments = useMemo(() => {
    let offset = 0;
    return stats.languages.map((language) => {
      const segment = { ...language, offset };
      offset += language.percentage;
      return segment;
    });
  }, [stats.languages]);
  const scopeLabel = stats.summary.includesPrivate
    ? "Dados agregados de repositórios públicos e privados"
    : "Volume de código em repositórios públicos próprios";

  return (
    <article className="h-full bg-card border border-border rounded-xl p-5 overflow-hidden" data-testid="github-languages">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="font-semibold text-lg">Linguagens mais utilizadas</h3>
          <p className="text-sm text-muted-foreground">{scopeLabel}</p>
        </div>
        <Code2 className="size-5 text-primary shrink-0" aria-hidden="true" />
      </div>
      <div className="grid sm:grid-cols-[minmax(150px,0.8fr)_minmax(180px,1.2fr)] items-center gap-6">
        <div className="relative mx-auto size-44" role="img" aria-label="Distribuição das linguagens mais utilizadas">
          <svg viewBox="0 0 120 120" className="size-full -rotate-90">
            <circle cx="60" cy="60" r="46" pathLength="100" fill="none" stroke="hsl(var(--secondary))" strokeWidth="16" />
            {segments.map((language) => (
              <circle key={language.name} cx="60" cy="60" r="46" pathLength="100" fill="none" stroke={language.color} strokeWidth="16" strokeDasharray={`${language.percentage} ${100 - language.percentage}`} strokeDashoffset={-language.offset} />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <strong className="text-2xl">{stats.languages.length}</strong>
            <span className="text-xs text-muted-foreground">linguagens</span>
          </div>
        </div>
        <ul className="space-y-2.5" aria-label="Percentual por linguagem">
          {stats.languages.map((language) => (
            <li key={language.name} className="flex items-center gap-2 text-sm">
              <span className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: language.color }} aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate">{language.name}</span>
              <strong className="tabular-nums">{formatPercentage(language.percentage)}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm">
          <MessageSquareCode className="size-4 text-primary" aria-hidden="true" />
          <span><strong>{stats.summary.repositoryCount}</strong> repositórios</span>
        </div>
        <div className="flex items-center justify-end gap-2 text-sm">
          <GitPullRequest className="size-4 text-primary" aria-hidden="true" />
          <span><strong>{stats.summary.stars}</strong> estrelas</span>
        </div>
      </div>
    </article>
  );
}
