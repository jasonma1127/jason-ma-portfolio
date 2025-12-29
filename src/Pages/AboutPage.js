import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="title-section">
        <Title title="about" span="about" />
      </div>
      <div className="content-section">
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  );
}

export default AboutPage;
