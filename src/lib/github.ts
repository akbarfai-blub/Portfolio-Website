type GitHubData = {
  repos: number;
  followers: number;
  contributions: number;
};

export async function getGitHubData(): Promise<GitHubData> {
  const username = "akbarfai-blub";
  const token = process.env.GITHUB_TOKEN;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const userData = await userRes.json();

    let contributions = 0;

    if (token) {
      try {
        const contributionsRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `{
              user(login: "${username}") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }`,
          }),
          next: { revalidate: 3600 },
        });

        if (contributionsRes.ok) {
          const contributionsData = await contributionsRes.json();
          contributions =
            contributionsData?.data?.user?.contributionsCollection
              ?.contributionCalendar?.totalContributions ?? 0;
        }
      } catch {
        contributions = 0;
      }
    }

    return {
      repos: userData.public_repos,
      followers: userData.followers,
      contributions,
    };
  } catch {
    return {
      repos: 0,
      followers: 0,
      contributions: 0,
    };
  }
}
