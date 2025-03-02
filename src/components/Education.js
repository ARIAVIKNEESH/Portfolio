import React from "react";
import "../styles/education.css";

const educationData = [
  {
    year: "2026",
    course: "B.Tech Information Technology",
    institution: "Kongu Engineering College",
    location: "Perundurai, Erode",
    percentage: "76%",
  },
  {
    year: "2022",
    course: "HSC",
    institution: "Srinivasa Vidhyalaya Matric Higher Secondary School",
    location: "Udumalpet, Tiruppur",
    percentage: "80.3%",
  },
  {
    year: "2020",
    course: "SSLC",
    institution: "Srinivasa Vidhyalaya Matric Higher Secondary School",
    location: "Udumalpet, Tiruppur",
    percentage: "71.2%",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="education-details">
              <span className="education-year">{edu.year}</span>
              <span className="education-course">{edu.course}</span>
              <span className="education-institution">
                {edu.institution}, {edu.location}
              </span>
              <span className="education-percentage">Percentage: {edu.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
