import { ActivityOverview } from "@/features/github/components/activity-overview";
import { LanguagesOverview } from "@/features/github/components/languages-overview";
import { useGitHubStats } from "@/features/github/hooks/use-github-stats";

export function GitHubInsights() {
  const stats = useGitHubStats();
  const updatedLabel = stats.updatedAt
    ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(stats.updatedAt))
    : "dados públicos disponíveis";

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6">
        <LanguagesOverview stats={stats} />
        <ActivityOverview stats={stats} />
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">Atualização automática diária · {updatedLabel}</p>
    </div>
  );
}
