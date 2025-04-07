import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Profile />
      <Contact />
    </div>
  );
};

export default Home;
