import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        
        <div className="project-card">
          <h3>Blood Bank Management System</h3>
          <p>
            A web-based system developed using Angular to manage blood donations and requests. It allows users to register as donors, request blood types, and track available blood stocks efficiently.
          </p>
          <h4>Tech Stack:</h4>
          <ul>
            <li><strong>Frontend:</strong> Angular</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Hotel Booking App</h3>
          <p>
            A hotel reservation platform built with React that allows users to search, filter, and book rooms. It features user authentication, real-time availability checking, and a secure payment gateway.
          </p>
          <h4>Tech Stack:</h4>
          <ul>
            <li><strong>Frontend:</strong> React, Material-UI</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Virtual Classroom Management System</h3>
          <p>
            A web platform that enables online classroom management with features like student registration, assignment uploads, and real-time messaging. This system ensures a seamless learning experience.
          </p>
          <h4>Tech Stack:</h4>
          <ul>
            <li><strong>Frontend:</strong> React, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Faculty Management System</h3>
          <p>
            A Python-based system to manage faculty records, schedules, and workload distribution. It automates administrative tasks, making faculty coordination smoother and more efficient.
          </p>
          <h4>Tech Stack:</h4>
          <ul>
            <li><strong>Backend:</strong> Python (Flask)</li>
            <li><strong>Database:</strong> MongoDB</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;
