import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { aggregateGitHubStats } from "./github-stats/aggregate-stats.mjs";
import { githubStatsConfig } from "./github-stats/config.mjs";
import { fetchGitHubData } from "./github-stats/github-client.mjs";

if (!githubStatsConfig.token) {
  throw new Error("GITHUB_STATS_TOKEN ou GITHUB_TOKEN é obrigatório.");
}

const githubData = await fetchGitHubData(githubStatsConfig);
const stats = aggregateGitHubStats({
  username: githubStatsConfig.username,
  ...githubData,
});

await mkdir(path.dirname(githubStatsConfig.outputPath), { recursive: true });
await writeFile(
  githubStatsConfig.outputPath,
  `${JSON.stringify(stats, null, 2)}\n`,
  "utf8",
);
console.log(`Estatísticas de ${githubStatsConfig.username} atualizadas.`);
