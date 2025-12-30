import AboutSection from "../Components/AboutSection";
import GitHubStats from "../Components/GitHubStats";
import SkillsSection from "../Components/SkillsSection";
import ContactSection from "../Components/ContactSection";
import Title from "../Components/Title";

function AboutPage() {
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
