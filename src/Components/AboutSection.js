function AboutSection() {
  return (
    <div className="about-section">
      <h2>Introduction</h2>
      <div className="about-info">
        <div className="about-details">
          <ul className="about-items">
            <li className="about-item">Name</li>
            <li className="about-item">Age</li>
            <li className="about-item">E-mail</li>
            <li className="about-item">Education</li>
            <li className="about-item">Major</li>
          </ul>
          <ul className="info-items">
            <li className="info-item">: Jason Ma</li>
            <li className="info-item">: 23</li>
            <li className="info-item">: jasonma1127@gmail.com</li>
            <li className="info-item">: NTUST Taiwan TECH</li>
            <li className="info-item">: Computer Science</li>
          </ul>
        </div>
        <div className="download-cv-btn">
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
