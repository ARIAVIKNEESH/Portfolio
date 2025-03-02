import React, { useState } from "react";
import "../styles/profile.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { MdWeb } from "react-icons/md";

const profiles = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/ariavikneesh", bg: "#24292e" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ariavikneesh/", bg: "#0077b5" },
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/aria_vikneesh/", bg: "#f79c03" },
  { name: "Instagram", icon: <FaInstagram />, link: "http://instagram.com/_aestheticpikachu_", bg: "#e1306c" },
  { name: "HackerRank", icon: <SiHackerrank />, link: "https://www.hackerrank.com/profile/usaria2005", bg: "#2ec866" },
  { name: "Portfolio", icon: <MdWeb />, link: "https://ariaportfolio1.netlify.app", bg: "#6c63ff" },
];

const Profile = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="profile" className="profile-section">
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            className={`profile-item ${hovered === index ? "hovered" : ""}`}
            style={{ backgroundColor: hovered === index ? profile.bg : "transparent" }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="profile-icon">{profile.icon}</div>
            <span className="profile-name">{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profile;
