export type ActivityKey = "reviews" | "issues" | "pullRequests" | "commits";

export interface GitHubLanguage {
  name: string;
  color: string;
  bytes: number;
  percentage: number;
}

export interface GitHubStats {
  username: string;
  updatedAt: string | null;
  period: { from: string | null; to: string | null };
  summary: {
    repositoryCount: number;
    stars: number;
  };
  activity: Record<ActivityKey, number>;
  languages: GitHubLanguage[];
}
