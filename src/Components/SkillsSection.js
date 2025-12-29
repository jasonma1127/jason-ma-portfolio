import ProgressBar from "../Components/ProgressBar";

function SkillsSection() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="progress-bars">
        <ProgressBar title="C++" percentage="80%" />
        <ProgressBar title="Java" percentage="76%" />
        <ProgressBar title="Python" percentage="70%" />
        <ProgressBar title="HTML" percentage="60%" />
        <ProgressBar title="CSS" percentage="52%" />
        <ProgressBar title="JavaScript" percentage="43%" />
      </div>
    </div>
  );
}

export default SkillsSection;
