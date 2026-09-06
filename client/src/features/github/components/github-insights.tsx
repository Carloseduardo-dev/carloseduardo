import { ActivityOverview } from "@/features/github/components/activity-overview";
import { LanguagesOverview } from "@/features/github/components/languages-overview";
import { useGitHubStats } from "@/features/github/hooks/use-github-stats";

export function GitHubInsights() {
  const stats = useGitHubStats();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <LanguagesOverview stats={stats} />
      <ActivityOverview stats={stats} />
    </div>
  );
}
