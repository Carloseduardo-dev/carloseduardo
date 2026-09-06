import path from "node:path";

export const githubStatsConfig = {
  token: process.env.GITHUB_STATS_TOKEN ?? process.env.GITHUB_TOKEN,
  username: process.env.GITHUB_USERNAME ?? "Carloseduardo-dev",
  includePrivate: process.env.INCLUDE_PRIVATE === "true",
  outputPath: path.resolve("client/public/data/github-stats.json"),
};

export const languageColors = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  CSS: "#663399",
  HTML: "#e34c26",
  C: "#555555",
  "C++": "#f34b7d",
  Dart: "#00B4AB",
  Shell: "#89e051",
};
