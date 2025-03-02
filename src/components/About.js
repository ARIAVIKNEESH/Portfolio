import React from "react";
import "../styles/about.css";
import myProfile from "../assets/first.jpg"; // First image
import aboutImage from "../assets/profile.jpg"; // Second image
import resumePDF from "../assets/resume.pdf"; // Resume PDF

const About = () => {
  return (
    <section id="about" className="about">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={myProfile} alt="Hero Background" className="hero-image" />
        <div className="hero-content">
          <h1>
            HI, I AM <span className="highlight">ARIA VIKNEESH U S</span>
          </h1>
          <p>UI/UX DESIGNER AND WEB DEVELOPER</p>
          <a href={resumePDF} download="Browny_Star_Resume.pdf" className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <div className="about-left">
          <img src={aboutImage} alt="About Me" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            I am a UI/UX Designer and Web Developer. Passionate
            about crafting engaging digital experiences with a keen eye for
            design and usability.
          </p>
          <ul>
            <li>💻 Expertise in React, Node.js, and modern web technologies.</li>
            <li>🎯 Focused on building intuitive and scalable applications.</li>
            <li>🚀 Strong problem-solving skills and innovative solutions.</li>
            <li>📄 Explore my portfolio to see my work.</li>
            <li>📧 Contact me at usaria2005@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
