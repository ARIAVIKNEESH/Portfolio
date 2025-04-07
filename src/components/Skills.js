import React from "react";
import "../styles/skills.css";

const skillsData = [
  { name: "C", percentage: 85 },
  { name: "C++", percentage: 90 },
  { name: "Java", percentage: 88 },
  { name: "Python", percentage: 92 },
  { name: "MySQL", percentage: 87 },
  { name: "React.js", percentage: 95 },
  { name: "Node.js", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "JavaScript", percentage: 93 },
  { name: "CSS & HTML", percentage: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
