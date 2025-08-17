// MyProfile.js
import React from 'react';
import AboutSection from './AboutSection';
// import { FaUserGraduate, FaCode, FaDumbbell } from 'react-icons/fa'; 

export default function MyProfile() {
  const experienceSummary = "I have about 2 years of experience in IT field, including teaching computer programs and frontend development.";
  const skillsSummary = "My core skills include JavaScript, React, Node.js, and CSS, with a strong focus on building responsive and accessible interfaces.";
  const funFactsSummary = "When I'm not coding, I enjoy playing chess and hiking.";

  const skillsList = ["JavaScript", "React", "Node.js", "CSS", "SQL"];
  const funFactsList = ["I am a competitive chess player", "I love hiking in national parks", "I am a big fan of sci-fi movies"];
  const experienceList = ["Worked as a computer teacher at New Horizon, Bamyan Center |May 2023 - August 2024|", "Completed an intership in web developement at Webstack Academy, Remote |July 2024 - September 2024|"]

  return (
    <>
     <div className="about-section">
        <div className="about-me">
            <h2>About Me</h2>
            <p>I'm a tech enthusiast currently pursuing my <strong>bachelor's degree in Computer Science</strong> at the University of the People. My goal as a developer is to build things that solve real problems and help improve people's lives. I am currently learning <strong>React</strong> to build robust UIs, and I'm studying the <strong>Java</strong> language at university.</p>
        </div>
    </div>
  

    <section className="about-container">
      <div className="about-sections-wrapper">
        <AboutSection
          title="Experience"
          summary={experienceSummary}
          list={experienceList}
        />
        <AboutSection
          title="Skills"
          summary={skillsSummary}
          list={skillsList}
        />
        <AboutSection
          title="Fun Facts"
          summary={funFactsSummary}
          list={funFactsList}
        />
      </div>
    </section>
    </>
  );
}