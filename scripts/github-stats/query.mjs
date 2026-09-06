export const portfolioStatsQuery = `
  query PortfolioStats($login: String!, $after: String, $privacy: RepositoryPrivacy) {
    viewer { login }
    user(login: $login) {
      contributionsCollection {
        startedAt
        endedAt
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
      repositories(
        first: 100
        after: $after
        ownerAffiliations: OWNER
        privacy: $privacy
        isFork: false
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo { hasNextPage endCursor }
        nodes {
          isArchived
          isPrivate
          stargazerCount
          languages(first: 100, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node { name color }
            }
          }
        }
      }
    }
  }
`;
