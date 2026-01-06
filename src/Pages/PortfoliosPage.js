import { useState, useEffect } from "react";
import PortfoliosCard from "../Components/PortfoliosCard";
import Title from "../Components/Title";
import portfoliosDataFallback from "../data/portfoliosData";

function PortfoliosPage() {
  const [portfoliosData, setPortfoliosData] = useState(portfoliosDataFallback);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Try to load generated data from build-time fetch
    fetch('/portfolios-data.json')
      .then(res => {
        if (!res.ok) throw new Error('Generated data not found');
        return res.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          setPortfoliosData(data);
          console.log('✅ Loaded portfolio data from GitHub API');
        }
      })
      .catch(err => {
        console.warn('⚠️  Using fallback portfolio data:', err.message);
        // Already using fallback from useState
      });
  }, []);

  const getFilteredProjects = () => {
    if (filter === "all") return portfoliosData;
    if (filter === "featured") return portfoliosData.filter((p) => p.featured);
    return portfoliosData.filter((p) =>
      p.technologies.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  // Get all unique technologies (currently unused, reserved for future filtering feature)
  // const allTechnologies = [
  //   ...new Set(portfoliosData.flatMap((p) => p.technologies)),
  // ];

  return (
    <div className="portfolios-page">
      <div className="title-section">
        <Title title="portfolios" span="portfolios" />
      </div>
      <div className="content-section">
        <div className="portfolios-filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={filter === "featured" ? "active" : ""}
            onClick={() => setFilter("featured")}
          >
            Featured Projects
          </button>
        </div>

        <div className="portfolios-grid">
          {getFilteredProjects().length > 0 ? (
            getFilteredProjects().map((project) => (
              <PortfoliosCard key={project.id} project={project} />
            ))
          ) : (
            <p className="no-projects">No projects available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfoliosPage;
