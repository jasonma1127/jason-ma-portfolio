// ============================================
// GitHub API Service
// Fetches user data, repositories, and language statistics
// ============================================

const GITHUB_USERNAME = 'jasonma1127';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Language color mapping (matching GitHub's official colors)
const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  React: '#61dafb',
};

/**
 * Check if cached data is still valid
 */
function isCacheValid(timestamp) {
  if (!timestamp) return false;
  return Date.now() - timestamp < CACHE_DURATION;
}

/**
 * Get cached data from localStorage
 */
function getCachedData(key) {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (isCacheValid(timestamp)) {
      return data;
    }

    // Remove expired cache
    localStorage.removeItem(key);
    return null;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
}

/**
 * Save data to localStorage cache
 */
function setCachedData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error('Error saving cache:', error);
  }
}

/**
 * Fetch GitHub user profile data
 */
export async function fetchUserProfile() {
  const cacheKey = `github_user_${GITHUB_USERNAME}`;
  const cached = getCachedData(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const profile = {
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };

    setCachedData(cacheKey, profile);
    return profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

/**
 * Fetch all user repositories
 */
export async function fetchUserRepos() {
  const cacheKey = `github_repos_${GITHUB_USERNAME}`;
  const cached = getCachedData(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const repos = [];
    let page = 1;
    let hasMore = true;

    // Fetch all pages of repositories
    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      repos.push(...data);

      hasMore = data.length === 100;
      page++;
    }

    setCachedData(cacheKey, repos);
    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}

/**
 * Calculate language statistics from repositories
 */
export async function fetchLanguageStats() {
  const cacheKey = `github_languages_${GITHUB_USERNAME}`;
  const cached = getCachedData(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const repos = await fetchUserRepos();
    const languageBytes = {};

    // Fetch language data for each repository
    for (const repo of repos) {
      if (repo.fork) continue; // Skip forked repositories

      try {
        const response = await fetch(repo.languages_url);
        if (!response.ok) continue;

        const languages = await response.json();

        // Accumulate bytes for each language
        for (const [language, bytes] of Object.entries(languages)) {
          languageBytes[language] = (languageBytes[language] || 0) + bytes;
        }
      } catch (error) {
        console.error(`Error fetching languages for ${repo.name}:`, error);
      }
    }

    // Calculate total bytes
    const totalBytes = Object.values(languageBytes).reduce((sum, bytes) => sum + bytes, 0);

    // Convert to percentages and sort by usage
    const languageStats = Object.entries(languageBytes)
      .map(([language, bytes]) => ({
        name: language,
        bytes: bytes,
        percentage: ((bytes / totalBytes) * 100).toFixed(1),
        color: LANGUAGE_COLORS[language] || '#8b949e',
      }))
      .sort((a, b) => b.bytes - a.bytes);

    setCachedData(cacheKey, languageStats);
    return languageStats;
  } catch (error) {
    console.error('Error calculating language stats:', error);
    throw error;
  }
}

/**
 * Calculate GitHub statistics
 */
export async function fetchGitHubStats() {
  const cacheKey = `github_stats_${GITHUB_USERNAME}`;
  const cached = getCachedData(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const [profile, repos] = await Promise.all([
      fetchUserProfile(),
      fetchUserRepos()
    ]);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    const stats = {
      totalRepos: profile.public_repos,
      totalStars,
      totalForks,
      followers: profile.followers,
      following: profile.following,
    };

    setCachedData(cacheKey, stats);
    return stats;
  } catch (error) {
    console.error('Error calculating GitHub stats:', error);
    throw error;
  }
}

/**
 * Get all GitHub data in one call
 */
export async function fetchAllGitHubData() {
  try {
    const [profile, stats, languages] = await Promise.all([
      fetchUserProfile(),
      fetchGitHubStats(),
      fetchLanguageStats()
    ]);

    return {
      profile,
      stats,
      languages,
    };
  } catch (error) {
    console.error('Error fetching all GitHub data:', error);
    throw error;
  }
}

/**
 * Clear all cached GitHub data
 */
export function clearGitHubCache() {
  const keys = [
    `github_user_${GITHUB_USERNAME}`,
    `github_repos_${GITHUB_USERNAME}`,
    `github_languages_${GITHUB_USERNAME}`,
    `github_stats_${GITHUB_USERNAME}`,
  ];

  keys.forEach(key => localStorage.removeItem(key));
}
