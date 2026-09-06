import { GitCommitHorizontal } from "lucide-react";
import { formatPercentage } from "@/features/github/lib/format-percentage";
import type { ActivityKey, GitHubStats } from "@/features/github/model/github-stats";

const activityItems: Array<{ key: ActivityKey; shortLabel: string }> = [
  { key: "reviews", shortLabel: "Reviews" },
  { key: "issues", shortLabel: "Issues" },
  { key: "pullRequests", shortLabel: "PRs" },
  { key: "commits", shortLabel: "Commits" },
];

export function ActivityOverview({ stats }: { stats: GitHubStats }) {
  const total = Object.values(stats.activity).reduce((sum, value) => sum + value, 0);
  const percentages = activityItems.map(({ key }) => total > 0 ? (stats.activity[key] / total) * 100 : 0);
  const centerX = 180;
  const centerY = 116;
  const radiusX = 105;
  const radiusY = 70;
  const points = [
    [centerX, centerY - (radiusY * percentages[0]) / 100],
    [centerX + (radiusX * percentages[1]) / 100, centerY],
    [centerX, centerY + (radiusY * percentages[2]) / 100],
    [centerX - (radiusX * percentages[3]) / 100, centerY],
  ].map((point) => point.join(",")).join(" ");

  return (
    <article className="h-full bg-card border border-border rounded-xl p-5 overflow-hidden" data-testid="github-activity">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <h3 className="font-semibold text-lg">Visão geral da atividade</h3>
          <p className="text-sm text-muted-foreground">Contribuições nos últimos 12 meses</p>
        </div>
        <GitCommitHorizontal className="size-5 text-[#39d353] shrink-0" aria-hidden="true" />
      </div>
      <svg viewBox="0 0 360 245" className="w-full max-h-72" role="img" aria-label="Distribuição entre code reviews, issues, pull requests e commits">
        <g className="stroke-border" strokeWidth="1">
          <line x1="180" y1="40" x2="180" y2="192" />
          <line x1="68" y1="116" x2="292" y2="116" />
          <circle cx="180" cy="116" r="35" fill="none" opacity="0.5" />
          <circle cx="180" cy="116" r="70" fill="none" opacity="0.35" />
        </g>
        <polygon points={points} fill="rgba(57, 211, 83, 0.16)" stroke="#39d353" strokeWidth="3" strokeLinejoin="round" />
        {points.split(" ").map((point, index) => {
          const [cx, cy] = point.split(",");
          return <circle key={`${point}-${index}`} cx={cx} cy={cy} r="4" fill="#39d353" />;
        })}
        <g className="fill-foreground text-[11px] font-medium">
          <text x="180" y="18" textAnchor="middle">Code reviews · {formatPercentage(percentages[0])}</text>
          <text x="350" y="110" textAnchor="end">Issues</text>
          <text x="350" y="126" textAnchor="end" className="fill-muted-foreground">{formatPercentage(percentages[1])}</text>
          <text x="180" y="222" textAnchor="middle">Pull requests · {formatPercentage(percentages[2])}</text>
          <text x="10" y="110">Commits</text>
          <text x="10" y="126" className="fill-muted-foreground">{formatPercentage(percentages[3])}</text>
        </g>
      </svg>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
        {activityItems.map(({ key, shortLabel }) => (
          <div key={key} className="rounded-lg bg-secondary/70 px-3 py-2 text-center">
            <strong className="block text-sm">{stats.activity[key].toLocaleString("pt-BR")}</strong>
            <span className="text-xs text-muted-foreground">{shortLabel}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
