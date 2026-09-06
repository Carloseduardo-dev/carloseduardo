import { useEffect, useState } from "react";
import { fallbackGitHubStats } from "@/features/github/data/fallback-stats";
import type { GitHubStats } from "@/features/github/model/github-stats";

const statsUrl = "/data/github-stats.json";

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(fallbackGitHubStats);

  useEffect(() => {
    const controller = new AbortController();
    fetch(statsUrl, { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Não foi possível carregar as estatísticas do GitHub.");
        return response.json() as Promise<GitHubStats>;
      })
      .then(setStats)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Usando estatísticas locais do GitHub.", error);
      });
    return () => controller.abort();
  }, []);

  return stats;
}
