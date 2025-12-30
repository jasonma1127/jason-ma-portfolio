import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  const contactMethods = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "jasonma1127@gmail.com",
      link: "mailto:jasonma1127@gmail.com?subject=Hello from Portfolio",
      color: "#f34b7d",
      description: "Send me an email"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/%E9%A0%86%E5%93%B2-%E9%A6%AC-542800125/",
      color: "#0077b5",
      description: "Let's connect professionally"
    },
    {
      icon: faGithub,
      label: "GitHub",
      value: "Check my projects",
      link: "https://github.com/jasonma1127",
      color: "#6e5494",
      description: "View my repositories"
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+886 920-257485",
      link: "tel:+886920257485",
      color: "#90d5b1",
      description: "Give me a call"
    }
  ];

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat
        </p>
      </div>

      <div className="contact-grid">
        {contactMethods.map((method, index) => (
          <a
            key={method.label}
            href={method.link}
            target={method.link.startsWith('http') ? '_blank' : '_self'}
            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="contact-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="contact-icon" style={{ color: method.color }}>
              <FontAwesomeIcon icon={method.icon} />
            </div>
            <div className="contact-content">
              <h3>{method.label}</h3>
              <p className="contact-value">{method.value}</p>
              <span className="contact-description">{method.description}</span>
            </div>
            <div className="contact-arrow">→</div>
          </a>
        ))}
      </div>

      <div className="contact-footer">
        <p>
          💼 Open to new opportunities and collaborations
        </p>
        <p className="response-time">
          I typically respond within 24-48 hours
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
