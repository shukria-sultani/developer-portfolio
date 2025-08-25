import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Profile from './Components/Profile';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
//images
import profilePic from "./assets/images/profile.jpg"; 
import ContactForm from './Components/ContactFrom';
import FeedbackWall from './Components/FeebackWall';

function App() {

const profileInfo = {
  name: "Shukria Sultani",
  title: "Frontend Developer",
  bio: "I am a passionate frontend developer with a love for creating beautiful and functional user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
}
  return (
    <>
      <Navbar />
      <Header  message={"Hey, Welcome to my Portfolio"}/>
      <Profile  name={profileInfo.name}  title={profileInfo.title} bio={profileInfo.bio} img={profilePic} />
      <About />
      <Projects />
      <ContactForm  />
      <FeedbackWall />
      <Footer />
    </>
  )
}

export default App
