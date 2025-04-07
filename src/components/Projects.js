import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/projects.css";

// Import images from assets
import bloodBankImg from "../assets/blood.webp";
import hotelBookingImg from "../assets/hotel.png";
import virtualClassroomImg from "../assets/virtual2.png";

const projects = [
  {
    title: "Blood Bank Management System",
    description: "A web-based system developed using Angular to manage blood donations and requests.",
    techStack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    image: bloodBankImg,
  },
  {
    title: "Hotel Booking App",
    description: "A hotel reservation platform built with React that allows users to book rooms securely.",
    techStack: ["React", "Material-UI", "Node.js", "MongoDB"],
    image: hotelBookingImg,
    liveDemo: "https://hotelobooking1.netlify.app/",
  },
  {
    title: "Virtual Classroom Management System",
    description: "A web platform for online classroom management with real-time messaging.",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: virtualClassroomImg,
  },
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="projects-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={`project-card ${isHovered ? "paused" : ""}`}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="hover-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <h4>Tech Stack:</h4>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
