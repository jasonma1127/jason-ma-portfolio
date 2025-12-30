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
      // Wait for all content to load, then scroll
      const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          // Scroll with offset to account for nav bar
          const yOffset = -80; // Adjust based on your nav height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

      // Try multiple times to ensure content is loaded
      setTimeout(scrollToContact, 300);
      setTimeout(scrollToContact, 600);
      setTimeout(scrollToContact, 1000);
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'auto' });
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
