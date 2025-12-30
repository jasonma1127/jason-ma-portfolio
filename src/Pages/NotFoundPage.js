import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-icon">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist.
          It might have been moved or deleted.
        </p>
        <Link to={process.env.PUBLIC_URL + "/"} className="back-home-btn">
          <FontAwesomeIcon icon={faHome} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
