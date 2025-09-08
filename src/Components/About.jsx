import React from "react";
import AboutSection from "./AboutSection";
import Profile from "./Profile";
import profilePic from "../assets/images/profile.jpg";
export default function About() {
  const experienceSummary =
    "I have about 2 years of experience in the IT field, including teaching computer programs and frontend development.";
  const skillsSummary =
    "My core skills include JavaScript, React, CSS, HTML, Bootstrap with a strong focus on building responsive and accessible interfaces.";
  const funFactsSummary =
    "When I'm not coding, I enjoy meeting friends and reading novels.";
  const profileInfo = {
    name: "Shukria Sultani",
    title: "Frontend Developer",
    bio: "I am a passionate frontend developer with a love for creating beautiful and functional user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm pursuing my Bachelor's degree in Computer Science at the University of the People. My goal as a developer is to create innovative solutions that improve lives. Currently, I'm learning React for building dynamic UIs and studying Java at university. I'm actively seeking internships, junior roles, or freelance projects in frontend development to apply my skills and grow in the tech industry.",
  };
  const skillsList = [
    {
      name: "JavaScript",
      level: 90,
      funFact: "I built my first website using JavaScript.",
    },
    {
      name: "React",
      level: 80,
      funFact: "I love creating interactive UIs with React.",
    },
    {
      name: "HTML",
      level: 100,
      funFact: "I enjoy structuring content semantically.",
    },
    {
      name: "CSS",
      level: 95,
      funFact: "I have a passion for creative designs.",
    },
    {
      name: "Bootstrap",
      level: 90,
      funFact: "I like using Bootstrap for rapid development.",
    },
    { name: "Python", level: 50, funFact: "I am learning Python" },
    { name: "Java", level: 40, funFact: "I am learning Java" },
  ];

  const funFactsList = [
    "I like watching documentaries",
    "I love walking in nature",
    "I am interested in photography",
  ];

  const experienceList = [
    "Worked as a computer teacher at New Horizon, Bamyan Center |May 2023 - August 2024|",
    "Completed an internship in web development at Webstack Academy, Remote |July 2024 - September 2024|",
  ];

  return (
    <>
      <div className="about-section" id="about">
        <div className="about-me">
          <h2>About Me</h2>
          <Profile
            name={profileInfo.name}
            title={profileInfo.title}
            bio={profileInfo.bio}
            img={profilePic}
          ></Profile>
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
