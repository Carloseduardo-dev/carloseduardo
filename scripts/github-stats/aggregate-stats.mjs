import { languageColors } from "./config.mjs";

function aggregateLanguages(repositories) {
  const totals = new Map();

  for (const repository of repositories) {
    for (const edge of repository.languages.edges) {
      const current = totals.get(edge.node.name) ?? {
        name: edge.node.name,
        color: edge.node.color ?? languageColors[edge.node.name] ?? "#64748b",
        bytes: 0,
      };
      current.bytes += edge.size;
      totals.set(edge.node.name, current);
    }
  }

  const sorted = [...totals.values()].sort((a, b) => b.bytes - a.bytes);
  const visible = sorted.slice(0, 6);
  const remaining = sorted.slice(6);
  if (remaining.length) {
    visible.push({
      name: "Outras",
      color: "#64748b",
      bytes: remaining.reduce((sum, language) => sum + language.bytes, 0),
    });
  }

  const totalBytes = visible.reduce((sum, language) => sum + language.bytes, 0);
  return visible.map((language) => ({
    ...language,
    percentage: totalBytes > 0
      ? Number(((language.bytes / totalBytes) * 100).toFixed(2))
      : 0,
  }));
}

export function aggregateGitHubStats({ username, contributions, repositories }) {
  return {
    username,
    updatedAt: new Date().toISOString(),
    period: {
      from: contributions.startedAt,
      to: contributions.endedAt,
    },
    summary: {
      repositoryCount: repositories.length,
      stars: repositories.reduce((sum, repository) => sum + repository.stargazerCount, 0),
    },
    activity: {
      reviews: contributions.totalPullRequestReviewContributions,
      issues: contributions.totalIssueContributions,
      pullRequests: contributions.totalPullRequestContributions,
      commits: contributions.totalCommitContributions,
    },
    languages: aggregateLanguages(repositories),
  };
}
