import React from "react";
import "./about.css";
import AI from "../../assets/ai.jfif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AI} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small> WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 30+ Completed</small>
            </article>
          </div>
          <p>
            Software Engineer with experience in designing and building
            responsive, dynamic applications. Currently working on building
            consumer-facing web applications using the MERN Stack. Although I
            gravitate towards front-end development, I am well adept at backend
            as well. I aspire to work as a developer by devoting my
            technological versatility, problem-solving outlook, and cognizance
            towards formulating a great user experience.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
