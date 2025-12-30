import { useState, useEffect } from "react";
import { fetchGitHubStats } from "../services/githubApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faStar, faCodeFork, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const data = await fetchGitHubStats();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load GitHub stats:', err);
        setError('Unable to load GitHub statistics');
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="github-stats loading">
        <div className="loading-spinner"></div>
        <p>Loading GitHub stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-stats error">
        <p>{error}</p>
      </div>
    );
  }

  const statCards = [
    {
      icon: faCodeBranch,
      label: "Public Repos",
      value: stats.totalRepos,
      color: "#89acd2"
    },
    {
      icon: faStar,
      label: "Total Stars",
      value: stats.totalStars,
      color: "#f1e05a"
    },
    {
      icon: faCodeFork,
      label: "Total Forks",
      value: stats.totalForks,
      color: "#90d5b1"
    },
    {
      icon: faUserGroup,
      label: "Followers",
      value: stats.followers,
      color: "#c6538c"
    }
  ];

  return (
    <div className="github-stats">
      <div className="stats-header">
        <h2>GitHub Statistics</h2>
        <p className="stats-subtitle">Real-time data from my GitHub profile</p>
      </div>

      <div className="stats-grid">
        {statCards.map((card, index) => (
          <div
            key={card.label}
            className="stat-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="stat-icon" style={{ color: card.color }}>
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{card.value}</div>
              <div className="stat-label">{card.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-footer">
        <a
          href="https://github.com/jasonma1127"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link"
        >
          View Full GitHub Profile →
        </a>
      </div>
    </div>
  );
}

export default GitHubStats;
