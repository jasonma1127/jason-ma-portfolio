import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
import GitHubStats from "../Components/GitHubStats";
import SkillsSection from "../Components/SkillsSection";
import ContactSection from "../Components/ContactSection";
import Title from "../Components/Title";

function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to contact section if hash is present
    if (location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="about-page">
      <div className="title-section">
        <Title title="about" span="about" />
      </div>

      <div className="content-section">
        {/* Personal Information */}
        <AboutSection />

        {/* GitHub Statistics */}
        <GitHubStats />

        {/* Skills & Languages from GitHub */}
        <SkillsSection />

        {/* Contact Information */}
        <ContactSection />
      </div>
    </div>
  );
}

export default AboutPage;
