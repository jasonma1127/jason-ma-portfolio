import { useState, useEffect } from "react";
import { fetchLanguageStats } from "../services/githubApi";
import ProgressBar from "./ProgressBar";

function SkillsSection() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadLanguageStats() {
      try {
        setLoading(true);
        const stats = await fetchLanguageStats();

        // Take top 8 languages for display
        setLanguages(stats.slice(0, 8));
        setError(null);
      } catch (err) {
        console.error('Failed to load language stats:', err);
        setError('Unable to load GitHub language statistics');

        // Fallback to static data if API fails
        setLanguages([
          { name: 'C++', percentage: '80', color: '#f34b7d' },
          { name: 'Java', percentage: '76', color: '#b07219' },
          { name: 'Python', percentage: '70', color: '#3572A5' },
          { name: 'HTML', percentage: '60', color: '#e34c26' },
          { name: 'CSS', percentage: '52', color: '#563d7c' },
          { name: 'JavaScript', percentage: '43', color: '#f1e05a' },
        ]);
      } finally {
        setLoading(false);
      }
    }

    loadLanguageStats();
  }, []);

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>Skills & Languages</h2>
        {!loading && !error && (
          <p className="skills-subtitle">
            Based on {languages.reduce((sum, lang) => sum + parseFloat(lang.bytes || 0), 0) > 0
              ? 'real GitHub repository data'
              : 'coding experience'}
          </p>
        )}
      </div>

      {loading && (
        <div className="skills-loading">
          <div className="loading-spinner"></div>
          <p>Loading GitHub data...</p>
        </div>
      )}

      {error && (
        <div className="skills-error">
          <p>{error}</p>
          <p className="error-subtitle">Showing fallback data</p>
        </div>
      )}

      {!loading && (
        <div className="progress-bars">
          {languages.map((lang, index) => (
            <ProgressBar
              key={lang.name}
              title={lang.name}
              percentage={`${lang.percentage}%`}
              color={lang.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      )}

      {!loading && !error && languages.length > 0 && (
        <div className="skills-footer">
          <p className="data-info">
            📊 Data automatically synced from GitHub • Updates daily
          </p>
        </div>
      )}
    </div>
  );
}

export default SkillsSection;
