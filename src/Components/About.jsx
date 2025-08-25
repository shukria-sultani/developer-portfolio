import React from 'react';
import AboutSection from './AboutSection';

export default function About() {
  const experienceSummary = "I have about 2 years of experience in the IT field, including teaching computer programs and frontend development.";
  const skillsSummary = "My core skills include JavaScript, React, CSS, HTML, Bootstrap with a strong focus on building responsive and accessible interfaces.";
  const funFactsSummary = "When I'm not coding, I enjoy meeting friends and reading novels.";

  const skillsList = [
    { name: "JavaScript", level: 90, funFact: "I built my first website using JavaScript." },
    { name: "React", level: 70, funFact: "I love creating interactive UIs with React." },
    { name: "HTML", level: 95, funFact: "I enjoy structuring content semantically." },
    { name: "CSS", level: 95, funFact: "I have a passion for creative designs." },
    { name: "Bootstrap", level: 85, funFact: "I like using Bootstrap for rapid development." },
    { name: "Python", level: 50, funFact: "I am learning Python" },
    { name: "Java", level: 40, funFact: "I am learning Java" },
  ];

  const funFactsList = [
    "I like watching documentaries",
    "I love walking in nature",
    "I am interested in photography"
  ];

  const experienceList = [
    "Worked as a computer teacher at New Horizon, Bamyan Center |May 2023 - August 2024|",
    "Completed an internship in web development at Webstack Academy, Remote |July 2024 - September 2024|"
  ];

  return (
    <>
      <div className="about-section" id='about'>
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
            showProgressBars={true} // Pass a prop to indicate progress bars
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
