import { useState } from "react";
import PortfoliosCard from "../Components/PortfoliosCard";
import Title from "../Components/Title";
import portfoliosData from "../data/portfoliosData";

function PortfoliosPage() {
  const [filter, setFilter] = useState("all");

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
