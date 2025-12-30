import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faGraduationCap, faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
  const profileData = [
    {
      icon: faUser,
      label: "Name",
      value: "Shun-Che Ma (Jason)",
      color: "#89acd2"
    },
    {
      icon: faBriefcase,
      label: "Position",
      value: "Software Developer",
      color: "#90d5b1"
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: "jasonma1127@gmail.com",
      color: "#f34b7d"
    },
    {
      icon: faGraduationCap,
      label: "Education",
      value: "M.S. Computer Science, NTUST",
      color: "#f1e05a"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Taipei, Taiwan",
      color: "#c6538c"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "View Profile",
      color: "#0077b5",
      link: "https://www.linkedin.com/in/%E9%A0%86%E5%93%B2-%E9%A6%AC-542800125/"
    }
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-subtitle">
          Software Developer | Cloud & DevOps Specialist
        </p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p>
            Hi! I'm Jason Ma (Shun-Che Ma), a Software Developer with expertise in cloud architecture,
            DevOps, and security engineering. I hold a Master's degree in Computer Science from
            National Taiwan University of Science and Technology (NTUST).
          </p>
          <p>
            With professional experience spanning AWS cloud infrastructure, Kubernetes, CI/CD pipelines,
            and ETL systems, I specialize in building scalable, secure solutions. My background includes
            information security research and full-stack development, with contributions to malware analysis
            and automated security tools.
          </p>
          <p>
            I'm passionate about leveraging modern technologies to solve complex problems, continuously
            expanding my technical expertise in cloud-native architectures and DevOps practices.
          </p>
        </div>

        <div className="about-info-grid">
          {profileData.map((item, index) => (
            <div
              key={item.label}
              className="info-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="info-icon" style={{ color: item.color }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="info-content">
                <div className="info-label">{item.label}</div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-value info-link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="info-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="about-actions">
          <a
            href="https://www.linkedin.com/in/%E9%A0%86%E5%93%B2-%E9%A6%AC-542800125/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>View Resume on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
