type GitHubData = {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
};

export async function getGitHubData(): Promise<GitHubData> {
  const username = "akbarfai-blub";
  const token = process.env.GITHUB_TOKEN;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const totalStars = reposData.reduce(
      (acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count,
      0
    );

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
            contributionsData?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
        }
      } catch {
        contributions = 0;
      }
    }

    return {
      repos: userData.public_repos,
      stars: totalStars,
      followers: userData.followers,
      contributions,
    };
  } catch {
    return {
      repos: 0,
      stars: 0,
      followers: 0,
      contributions: 0,
    };
  }
}
