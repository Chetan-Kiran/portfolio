import '../styles/about.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="page-title">About Me</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate developer with a love for creating clean, efficient, and user-friendly applications.
              With several years of experience in web development, I specialize in building modern web applications
              using the latest technologies.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which led me to pursue computer
              science and develop a deep passion for coding and problem-solving.
            </p>
          </div>

          <div className="about-section">
            <h2>Education</h2>
            <div className="timeline-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="timeline-date">2023 - 2027</p>
              <p>University Name - Sri Vasavi Engineering Collage</p>
            </div>
            <div className="timeline-item">
              <h3>Certifications</h3>
              <p>Full Stack Web Development Certificate</p>
              <p>Advanced React & JavaScript</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Interests & Hobbies</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <h3>Coding</h3>
                <p>Open source contributions and personal projects</p>
              </div>
              <div className="interest-item">
                <h3>Photography</h3>
                <p>Capturing moments and exploring creativity</p>
              </div>
              <div className="interest-item">
                <h3>Reading</h3>
                <p>Tech blogs, sci-fi novels, and philosophy</p>
              </div>
              <div className="interest-item">
                <h3>Travel</h3>
                <p>Exploring new cultures and cuisines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
