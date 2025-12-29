import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function PortfoliosCard({ project }) {
  return (
    <div className={`portfolios-card ${project.featured ? "featured" : ""}`}>
      {project.image && (
        <div className="portfolios-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="portfolios-content">
        <h2 className="portfolios-title">{project.title}</h2>
        <p className="portfolios-description">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="portfolios-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="portfolios-links">
        {project.githubUrl && (
          <Link
            to={{ pathname: project.githubUrl }}
            target="_blank"
            className="portfolio-link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            to={{ pathname: project.liveUrl }}
            target="_blank"
            className="portfolio-link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
          </Link>
        )}
        {project.blogPostUrl && (
          <Link
            to={{ pathname: project.blogPostUrl }}
            target="_blank"
            className="portfolio-link"
          >
            <FontAwesomeIcon icon={faNewspaper} /> 相關文章
          </Link>
        )}
      </div>
    </div>
  );
}

export default PortfoliosCard;
