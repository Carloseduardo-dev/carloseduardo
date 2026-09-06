import { portfolioStatsQuery } from "./query.mjs";

async function requestPage({ token, username, includePrivate, after }) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "carlos-eduardo-portfolio",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      query: portfolioStatsQuery,
      variables: {
        login: username,
        after,
        privacy: includePrivate ? null : "PUBLIC",
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub respondeu com HTTP ${response.status}.`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map(({ message }) => message).join("; "));
  }
  if (!payload.data?.user) {
    throw new Error(`Usuário ${username} não encontrado.`);
  }

  return payload.data;
}

export async function fetchGitHubData({ token, username, includePrivate }) {
  const repositories = [];
  let contributions = null;
  let after = null;

  do {
    const data = await requestPage({ token, username, includePrivate, after });
    if (includePrivate && data.viewer.login.toLowerCase() !== username.toLowerCase()) {
      throw new Error("GH_STATS_TOKEN não pertence ao usuário configurado em GITHUB_USERNAME.");
    }

    contributions ??= data.user.contributionsCollection;
    repositories.push(
      ...data.user.repositories.nodes.filter((repository) => !repository.isArchived),
    );
    after = data.user.repositories.pageInfo.hasNextPage
      ? data.user.repositories.pageInfo.endCursor
      : null;
  } while (after);

  return { contributions, repositories };
}
