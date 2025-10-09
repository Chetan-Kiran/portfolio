import '../styles/skills.css';

export default function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Java', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'Firebase', level: 75 },
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <h1 className="page-title">Technical Skills</h1>
        <p className="skills-intro">
          Here are the technologies and tools I work with regularly. I'm always learning and expanding my skillset.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
